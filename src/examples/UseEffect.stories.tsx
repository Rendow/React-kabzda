import React, {useEffect} from "react";
import {useState} from "react";

export default {
    title: 'useEffect/useEffect demo'
}


export const Example = () => {
    const [counter, setCounter] = useState(1)

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         document.title = counter.toString()
    //     }, 1000)
    // }, [counter])
    //

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return (
        <>
            <button onClick={() => {setCounter(counter + 1)}}>
                +
            </button>
            {counter}
        </>
    )

}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component rendered')

    useEffect(() => {
        console.log('Effect appear')

        return () => {
            console.log('Reset effect')
        }
    }, [counter])

    return <div>
        Hello, counter: {counter}
        <button onClick={() => {setCounter(counter + 1)}}>
            +
        </button>
    </div>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')

    console.log('Component rendered')

    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
            console.log(e.key)
            setText(state => state + e.key)
        }
        console.log('Effect appear')

        window.addEventListener('keypress',handler)
        return () => {
            console.log('Reset effect')

            window.removeEventListener('keypress',handler)

        }
    }, [])

    return <>
       Typed text: {text}
    </>
}