import React, {useEffect, useState} from "react";

type PropsType = {}

const getStringWithZero = (num:number) => num < 10 ? '0' + num : num

export const Clock: React.FC<PropsType> = () =>{
    const [date,setDate] = useState(new Date())

    useEffect(() => {
      const interval =  setInterval(()=>{
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    },[])


    return <div>
        <span>{getStringWithZero(date.getHours())}</span>
        :
        <span>{getStringWithZero(date.getMinutes())}</span>
        :
        <span>{getStringWithZero(date.getSeconds())}</span>
    </div>
}