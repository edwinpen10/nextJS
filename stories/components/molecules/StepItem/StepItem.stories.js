import StepItem from "../../../../components/molecules/StepItem";

export default {
    title:'/components/molecules/StepItem',
    component :StepItem,
}

const Template = (args) => <StepItem {...args}/>

export const Default = Template.bind({})

Default.args = {
    title:"Mobile Langend",
    desc1:"Mantul",
    icon:"/icon/step1.svg",
    desc2:"Test iokeda"
}