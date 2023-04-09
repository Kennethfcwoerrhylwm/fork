import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { BlockedRoute } from './BlockedRoute'
import { faker } from '@faker-js/faker'

export default {
  title: 'Components/BlockedRoute',
  component: BlockedRoute,
} as ComponentMeta<typeof BlockedRoute>

export const Default: ComponentStory<typeof BlockedRoute> = () => (
  <BlockedRoute>{faker.lorem.sentences(2)}</BlockedRoute>
)
