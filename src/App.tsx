import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Components/Accordion/Accordion";
import OnOff from "./Components/OnOff/OnOff";
import { Rating } from './Components/Rating/Rating';
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./Components/UncontrolledRating/UncontrolledRating";
import {UncontrolledRatingTwo} from "./Components/UncontrolledRatingTwo/UncontrolledRatingTwo";
import UncontrolledAccordionTwo from "./Components/UncontrolledAccordionTwo/UncontrolledAccordionTwo";
import {RatingTwo, RatingValueType} from "./Components/RatingTwo/RatingTwo";
import UncontrolledOnOff from "./Components/UncontrolledOnOff/UncontrolledOnOff";


function App() {
    console.log("app rendering")

    let [ratingTwoValue, setRatingTwoValue] = useState<RatingValueType>(0)
    let [accCollapsed, setAccCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(true)

    return (
        <div className={'App'}>
           {/* <OnOff on={switchOn} onChange ={setSwitchOn}/>*/}
            <UncontrolledOnOff onChange ={setSwitchOn}/> {switchOn.toString()}

            <Accordion titleValue={"Accordion"} accCollapsed={accCollapsed}
                       setAccCollapsed={setAccCollapsed}
             />

            <UncontrolledAccordion titleValue={"UncontrolledAccordion"} />
            <UncontrolledAccordionTwo titleValue={"UncontrolledAccordionTwo"}/>

            <Rating value={4} />
            <RatingTwo value={ratingTwoValue} onClick={setRatingTwoValue}/>

            <UncontrolledRating />
            <UncontrolledRatingTwo />


        </div>
    );
}

type PageTitlePropsTitle = {
    title: string
}

function PageTitle(props: PageTitlePropsTitle) {
    console.log("apptitle rendering")
    return <h1>{props.title}</h1>
}



export default App;



