import React, {useState} from 'react';
import UncontrolledAccordion from "./UncontrolledAccordion";


export default {
    title: 'UnAccordion stories',
    component: UncontrolledAccordion
}
export const ModeChanging = () => {
    return <UncontrolledAccordion titleValue={'Menu'} />
}
