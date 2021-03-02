import React, {ChangeEvent, useRef, useState} from 'react';
import OnOff from "../Components/OnOff/OnOff";



export default {
    title: 'My/input'
}
//обычный инпут
export const UncInput = () => <span>QWERTTYYUU</span>

//инпут с отображение результатов ввода
export const ConInput = () => {
    const [value,setValue] =  useState('')

    const Change = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }

    return <> <input onChange={Change}/> {value} </>
}


//при нажатии кнопки значение инпута отправляется в локальный стейт, юзРеф - ссылка на обьект
export const UnButton = () => {
    const [value,setValue] =  useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <> <input ref={inputRef} /><button onClick={save}>save
    </button> actual value - {value}  </>
}
export const ControlledInput = () => {
    const [parentValue,setParentValue] =  useState('')
    const Change = (e:ChangeEvent<HTMLInputElement>) => {setParentValue(e.currentTarget.value)}

    return (
        <input value={parentValue} onChange={Change}/>
) }
export const ControlledCheckbox = () => {
    const [parentValue,setParentValue] =  useState(true)
    const Change = (e:ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <input value='checkbox' checked={parentValue} onChange={Change}/>
        )}
export const ControlledSelect = () => {

    const [parentValue,setParentValue] =  useState<string | undefined>('2')
    const Change = (e:ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <select value={parentValue} onChange={Change}>
            <option value="1">minsk</option>
            <option value="2">moscow</option>
            <option value="3">paragvay</option>
        </select>
    )
}
