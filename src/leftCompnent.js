import img from './smartwatch-svgrepo-com (1).svg';
import React from "react";
import classes from './leftComponent.module.css'

const leftComponent = ()=>{
    return (
        <div className={classes.lefImagetDiv} >
            <img className={classes.image} src="https://imgur.com/iOeUBV7.png"></img>
            <div className={classes.text}>
                <h3>00:00</h3>
            </div>            
        </div>
    )
}

export default leftComponent;