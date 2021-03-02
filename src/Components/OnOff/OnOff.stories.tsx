import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

import OnOff from "./OnOff";

export default {
    title: 'OnOff',
    component: OnOff
}
export const OffMode = () => <OnOff on={false} onChange={x=>x}/>

export const OnMode = () => <OnOff on={true} onChange={x=>x}/>

export const ModeChanging = () => {

   const [value,setValue] = useState(false)
    return <OnOff on={value} onChange={setValue} />}
