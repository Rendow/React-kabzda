import React from "react";
import {RatingValueType} from "../RatingTwo/RatingTwo";

export type  AccordionPropsType = {
    titleValue: string
    accCollapsed: boolean
    setAccCollapsed: (value:boolean) => void
}



export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} setAccCollapsed={props.setAccCollapsed}
                                accCollapsed={props.accCollapsed}
                />
                {!props.accCollapsed  && <AccordionBody/>}
            </div>
        )
    }


type  AccordionTitlePropsType = {
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
function AccordionBody() {
    console.log("AccordionBody rendering")
    return (
        <div>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

