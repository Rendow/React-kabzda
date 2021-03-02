import React, {useState} from "react";

type  PropsType = {
    onChange: (on: boolean) => void
}


function UncontrolledOnOff(props: PropsType) {


    let [on, setOn] = useState(true)

    console.log(on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red'


    }
    const indicateStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red'
    };


    const onClicked = () => {
            setOn(true)
            props.onChange(true)
    }
    const offClicked = () => {
            setOn(false)
            props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicateStyle}></div>

        </div>

    )
}

export default UncontrolledOnOff;