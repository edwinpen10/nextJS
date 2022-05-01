import Input from "../../../../components/atoms/input";

export default {
    title:'/components/atoms/input',
    component :Input,
}

const Template = (args) => <Input {...args}/>

export const Default = Template.bind({})

Default.args = {
    label:"Nama Lengkap"
}