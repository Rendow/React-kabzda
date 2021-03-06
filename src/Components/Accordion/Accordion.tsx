import React from "react";
import {RatingValueType} from "../RatingTwo/RatingTwo";
export type  ItemType = {
    title:string
    value:any
}
export type  AccordionPropsType = {
    onClick:(value:any) => void
    titleValue: string
    accCollapsed: boolean
    setAccCollapsed: (value:boolean) => void
    items:ItemType[]
}



export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} setAccCollapsed={props.setAccCollapsed}
                                accCollapsed={props.accCollapsed}
                />
                {!props.accCollapsed  && <AccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
    }


type AccordionTitlePropsType = {
    title: string
    setAccCollapsed: (value:boolean) => void
    accCollapsed: boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3 onClick={() => {props.setAccCollapsed(!props.accCollapsed)}} >
            {props.title}
        </h3>
    )
}


type  AccordionBodyPropsType = {
    title: string
}
export type  AccordionBodyType = {
onClick:(value:any) => void
    items:ItemType[]
}

function AccordionBody(props:AccordionBodyType) {
    console.log("AccordionBody rendering")
    return (
        <div>
            {props.items.map((i,index)=> <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </div>
    )
}

