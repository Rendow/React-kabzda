import React, {useState} from "react";
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Select',
    components: Select,
};

export const SelectWithValue = () => {
    const [value, setValue] = useState('2');
    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'minsk'},
                {value: '2', title: 'kiev'},
                {value: '3', title: 'moscow'}]}
        />
    )
}


export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null);
    return (
        <Select
            value={value}
            onChange={action('value changed')}
            items={[
                {value: '1', title: 'minsk'},
                {value: '2', title: 'kiev'},
                {value: '3', title: 'moscow'}]}
        />
    )
}