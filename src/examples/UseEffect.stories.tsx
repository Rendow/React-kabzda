import React, {useEffect} from "react";
import {useState} from "react";

export default {
    title: 'useEffect demo'
}


export const Example = () => {
    const [counter, setCounter] = useState(1)

/*
    useEffect(()=>{
        document.title = counter.toString()
    }, [counter])
*/

/*    useEffect(()=>{
        setTimeout(()=>{
            document.title = counter.toString()
        }, 1000)
    }, [counter])

    */

    useEffect(()=>{
        setInterval(()=>{
            setCounter(state => state +1)
        }, 1000)
    }, [])



    return (
        <>
            <button onClick={()=>{setCounter(counter +1)}}>+ </button>
            {counter}
        </>
    )
}

