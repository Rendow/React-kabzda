import React, {useState} from 'react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {Story} from "@storybook/react/types-6-0";


export default {
    title: 'Accordion stories new',
    component: Accordion
}

const  Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>

export const MenuCollapsedMode = Template.bind({})
MenuCollapsedMode.args ={
    accCollapsed:true,
    setAccCollapsed:x=>x,
     titleValue: 'Menu'
}

export const OnMode = () => <Accordion accCollapsed={false} setAccCollapsed={x=>x} titleValue={'Menu'} />

export const ModeChanging = () => {

   const [value,setValue] = useState(true)
    return <Accordion accCollapsed={value} setAccCollapsed={setValue} titleValue={'Menu'} />}
