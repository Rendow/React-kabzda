import React, {useState} from "react";

type RatingValueType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type RatingPropsType = {
    defaultValue?:RatingValueType
}

export function UncontrolledRating(props:RatingPropsType) {

    console.log("UncontrolledRating rendering")

    const [value, setValue] = useState(props.defaultValue ? props.defaultValue : 0 )

    return (
        <div>
            <Star selected={value > 0} selectStar={() => setValue(1)}/>
            <Star selected={value > 1} selectStar={() => setValue(2)}/>
            <Star selected={value > 2} selectStar={() => setValue(3)}/>
            <Star selected={value > 3} selectStar={() => setValue(4)}/>
            <Star selected={value > 5} selectStar={() => setValue(5)}/>
        </div>
    );

}

type StarPropsType = {
    selected: boolean
    selectStar: () => void
}

function Star(props: StarPropsType) {

    console.log("star rendering")

    const changeSelectedHandler = () => {
        props.selectStar()
    }

    return <span onClick={changeSelectedHandler}>
        {props.selected ? <b>star </b> : 'star'}
    </span>

}








