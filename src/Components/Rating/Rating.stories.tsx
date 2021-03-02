import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Rating} from "./Rating";
import {RatingTwo, RatingValueType} from "../RatingTwo/RatingTwo";

export default {
    title: 'Rating stories',
    component: Rating, RatingTwo
}
export const EmptyRating = () => <Rating value={0}/>
export const Rating1 = () => <Rating value={1}/>
export const Rating2 = () => {

   const [rating,setRating] = useState<RatingValueType>(3)
    return <RatingTwo value={rating} onClick={setRating}
/>}
