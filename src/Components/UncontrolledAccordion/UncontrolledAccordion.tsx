import React, {useReducer} from "react";
import {reducer, ToggleCollapsed} from "./reducer";

type  AccordionPropsType = {
    titleValue: string
}


function UncontrolledAccordion(props: AccordionPropsType) {

   // let [collapsed, setOn] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer,{collapsed:false})

        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
             {/*   <button onClick={() => { setOn(!collapsed)}}>toggle</button>*/}
                <button onClick={() => { dispatch({type:ToggleCollapsed})}}>toggle</button>
                {!collapsed  && <AccordionBody/>}
            </div>
        )
    }


type  AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
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

export default UncontrolledAccordion;