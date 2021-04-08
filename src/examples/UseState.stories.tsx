import React from "react";
import {useState} from "react";

export default {
    title: 'useState demo'
}

function genrateData() {
    //тут слоные вычисления
    return 2194789352
}
export const Example = () => {
    const [counter, setCounter] = useState(genrateData)


    const changer = (state:number) =>{
        return state + 1
    }
    return (
        <>
            <button onClick={()=>{setCounter(changer)}}>+ </button>
            {counter}
        </>
    )
}
