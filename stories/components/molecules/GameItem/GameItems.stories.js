import GameItems from "../../../../components/molecules/GameItems";

export default {
    title:'/components/molecules/GameItems',
    component :GameItems,
}

const Template = (args) => <GameItems {...args}/>

export const Default = Template.bind({})

Default.args = {
    title:"Mobile Langend",
    category:"Desktop",
    thumbnail:"/img/Thumbnail-1.png"
}