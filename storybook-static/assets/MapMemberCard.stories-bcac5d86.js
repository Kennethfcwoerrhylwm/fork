import{a as t}from"./jsx-runtime-913be41c.js";import{M as r}from"./MapMemberCard-f41c23ca.js";import{y as e}from"./index-a7768622.js";import"./index-2506bfc3.js";import"./Button-49db0c75.js";import"./Icon-5645cadc.js";import"./theme-ui-core-jsx-runtime.esm-9e16d62c.js";import"./theme-ui-css.esm-b19fe7ec.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-11801e73.js";import"./parseProps-376f43a7.esm-45b791e5.js";import"./emotion-styled.browser.esm-09c6e9f5.js";import"./icon-verified-badge-7d7bdb14.js";import"./icon-star-active-9fadbee7.js";import"./theme-ui-components.esm-a8d58c50.js";import"./emotion-react.browser.esm-aba50b66.js";import"./InternalLink-902afeab.js";import"./react-router-dom-66940fa3.js";import"./react-router-e884db87.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./index-4d501b15.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./Username-70498745.js";const K={title:"Components/MapMemberCard",component:r},o=()=>t(r,{imageUrl:"https://placekitten.com/450/450",moderationStatus:"accepted",description:`${e.lorem.sentence()}`,lastActive:`${e.date.past().toString()}`,user:{username:e.internet.userName(),isVerified:e.datatype.boolean(),country:e.address.countryCode("alpha-2")},heading:`${e.lorem.word()}`,isEditable:!1}),i=()=>t(r,{loading:!0,imageUrl:"https://placekitten.com/450/450",description:`${e.lorem.sentence()}`,lastActive:`${e.date.past()}`,moderationStatus:"accepted",user:{username:e.internet.userName(),isVerified:e.datatype.boolean(),country:e.address.countryCode("alpha-2")},heading:`${e.lorem.word()}`,isEditable:!1}),s=()=>t(r,{imageUrl:"https://placekitten.com/450/450",description:`${e.lorem.sentence()}`,lastActive:`${e.date.past()}`,user:{username:e.internet.userName(),isVerified:e.datatype.boolean(),country:e.address.countryCode("alpha-2")},heading:`${e.lorem.word()}`,moderationStatus:"awaiting-moderation",onPinModerated:a=>{alert("Approved? "+JSON.stringify(a))},isEditable:!0}),n=()=>t(r,{imageUrl:"https://placekitten.com/450/450",description:`${e.lorem.sentence()}`,lastActive:`${e.date.past()}`,user:{username:e.internet.userName(),isVerified:e.datatype.boolean(),country:e.address.countryCode("alpha-2")},heading:`${e.lorem.word()}`,moderationStatus:"draft",onPinModerated:a=>{alert("Approved? "+JSON.stringify(a))},isEditable:!0}),d=()=>t(r,{imageUrl:"https://placekitten.com/450/450",description:`${e.lorem.sentence()}`,lastActive:`${e.date.past()}`,user:{username:e.internet.userName(),isVerified:e.datatype.boolean(),country:e.address.countryCode("alpha-2")},heading:`${e.lorem.word()}`,moderationStatus:"rejected",onPinModerated:a=>{alert("Approved? "+JSON.stringify(a))},isEditable:!1});var p,m,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:'() => <MapMemberCard imageUrl="https://placekitten.com/450/450" moderationStatus="accepted" description={`${faker.lorem.sentence()}`} lastActive={`${faker.date.past().toString()}`} user={{\n  username: faker.internet.userName(),\n  isVerified: faker.datatype.boolean(),\n  country: faker.address.countryCode(\'alpha-2\')\n}} heading={`${faker.lorem.word()}`} isEditable={false} />',...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var l,u,f;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:'() => <MapMemberCard loading imageUrl="https://placekitten.com/450/450" description={`${faker.lorem.sentence()}`} lastActive={`${faker.date.past()}`} moderationStatus="accepted" user={{\n  username: faker.internet.userName(),\n  isVerified: faker.datatype.boolean(),\n  country: faker.address.countryCode(\'alpha-2\')\n}} heading={`${faker.lorem.word()}`} isEditable={false} />',...(f=(u=i.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,k,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`() => <MapMemberCard imageUrl="https://placekitten.com/450/450" description={\`\${faker.lorem.sentence()}\`} lastActive={\`\${faker.date.past()}\`} user={{
  username: faker.internet.userName(),
  isVerified: faker.datatype.boolean(),
  country: faker.address.countryCode('alpha-2')
}} heading={\`\${faker.lorem.word()}\`} moderationStatus="awaiting-moderation" onPinModerated={isPinApproved => {
  alert('Approved? ' + JSON.stringify(isPinApproved));
}} isEditable={true} />`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var h,$,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`() => <MapMemberCard imageUrl="https://placekitten.com/450/450" description={\`\${faker.lorem.sentence()}\`} lastActive={\`\${faker.date.past()}\`} user={{
  username: faker.internet.userName(),
  isVerified: faker.datatype.boolean(),
  country: faker.address.countryCode('alpha-2')
}} heading={\`\${faker.lorem.word()}\`} moderationStatus="draft" onPinModerated={isPinApproved => {
  alert('Approved? ' + JSON.stringify(isPinApproved));
}} isEditable={true} />`,...(b=($=n.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var M,S,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`() => <MapMemberCard imageUrl="https://placekitten.com/450/450" description={\`\${faker.lorem.sentence()}\`} lastActive={\`\${faker.date.past()}\`} user={{
  username: faker.internet.userName(),
  isVerified: faker.datatype.boolean(),
  country: faker.address.countryCode('alpha-2')
}} heading={\`\${faker.lorem.word()}\`} moderationStatus="rejected" onPinModerated={isPinApproved => {
  alert('Approved? ' + JSON.stringify(isPinApproved));
}} isEditable={false} />`,...(A=(S=d.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const Q=["Default","LoadingState","AwaitingModeration","Draft","Rejected"];export{s as AwaitingModeration,o as Default,n as Draft,i as LoadingState,d as Rejected,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=MapMemberCard.stories-bcac5d86.js.map
