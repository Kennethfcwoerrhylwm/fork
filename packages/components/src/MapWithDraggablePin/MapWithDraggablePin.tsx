import * as React from 'react'
import { Map, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import type { LatLngExpression } from 'leaflet'
import { Button, OsmGeocoding } from '../'
import { Box, Flex, Text } from 'theme-ui'
import customMarkerIcon from 'src/assets/icons/map-marker.png'
import type { Result } from '../OsmGeocoding/OsmGeocoding'

const customMarker = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [20, 28],
  iconAnchor: [10, 28],
})

type Point = {
  lat: number
  lng: number
}

const DraggableMarker = (props: {
  position: Point
  ondragend: (point: Point) => void
}) => {
  const [draggable] = React.useState(true)
  const markerRef = React.useRef<Marker>(null)

  return (
    <Marker
      draggable={draggable}
      ondragend={() => {
        const marker = markerRef.current;

        if (!marker) {
          return null
        }

        const markerLatLng = marker.leafletElement.getLatLng()
        if (props.ondragend) {
          props.ondragend(markerLatLng)
        }
      }}
      position={[props.position.lat, props.position.lng]}
      ref={markerRef}
      icon={customMarker}
    />
  )
}

export interface Props {
  position: Point
  updatePosition?: (p: Point) => void
  center?: LatLngExpression
  zoom?: number
  hasUserLocation?: boolean
}

export const MapWithDraggablePin = (props: Props) => {
  const [zoom, setZoom] = React.useState(props.zoom || 1)
  const [center, setCenter] = React.useState(
    props.center || [props.position.lat, props.position.lng],
  )
  const hasUserLocation = props.hasUserLocation || false
  const onPositionChanged = props.updatePosition || function () {}

  return (
    <div
      style={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          padding: 2,
          zIndex: 2,
        }}
      >
        <Flex style={{ width: '280px' }}>
          <OsmGeocoding
            callback={(data: Result) => {
              if (data.lat && data.lon) {
                onPositionChanged({
                  lat: parseFloat(data.lat),
                  lng: parseFloat(data.lon),
                })
                setCenter([data.lat, data.lon])
                setZoom(15)
              }
            }}
            countrycodes=""
            acceptLanguage="en"
          />
          {hasUserLocation && (
            <Button
              mx={2}
              onClick={(evt) => {
                evt.preventDefault()
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    onPositionChanged({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    })
                    setCenter([
                      position.coords.latitude,
                      position.coords.longitude,
                    ])
                    setZoom(15)
                  },
                  () => {},
                )
              }}
            >
              Use my current location
            </Button>
          )}
        </Flex>
      </Box>
      <div>
        <Map
          center={center}
          zoom={zoom}
          zoomControl={false}
          onViewportChanged={(evt) => {
            if (evt.zoom) {
              setZoom(evt.zoom)
            }
          }}
          onclick={(evt) => {
            onPositionChanged({
              lat: evt.latlng.lat,
              lng: evt.latlng.lng,
            })
          }}
          style={{
            height: '300px',
            zIndex: 1,
          }}
        >
          <ZoomControl position="topright" />
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <DraggableMarker
            position={props.position}
            ondragend={(evt: { lat: number; lng: number }) => {
              if (evt.lat && evt.lng)
                onPositionChanged({
                  lat: evt.lat,
                  lng: evt.lng,
                })
            }}
          />
        </Map>
      </div>
      <Box
        sx={{
          p: 2,
          mt: 2,
          background: 'softblue',
          borderRadius: 1,
        }}
      >
        <Text sx={{ fontSize: 1 }}>
          You can click on the map, or drag the marker to adjust it's position.
        </Text>
      </Box>
    </div>
  )
}
