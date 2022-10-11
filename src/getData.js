import React from "react";
import classes from './GetData.module.css';


export const GetColorOptions = (props)=>{
    return props.map((item,pos)=>{
        return (
            <a href="#"><img className={classes.rightImage} src={item.imageUrl}z></img></a>
        )
    })
}

export const GetFeatures = (props)=>{
    return  props.map((item,pos)=>{
        return (
            <button className={classes.btn} value={item}>{item}</button>       
        )
    })
}
