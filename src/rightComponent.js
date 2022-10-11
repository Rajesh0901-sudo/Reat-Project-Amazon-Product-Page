import ProductData from './ProductData' ;
import React from "react";
import classes from './rightComponent.module.css'
import {GetColorOptions,GetFeatures} from './getData';


const rightComponent = ()=>{
    return (
        <div>      
            <h1>{ProductData.title}</h1>
            <br></br>
            <p>{ProductData.description}</p>
            <br></br><br></br>
            <h4>Select Color</h4>
        
            <div className={classes.color}>
                {GetColorOptions(ProductData.colorOptions)}
            </div> 
            
            <h4>Features</h4>
            <div className={classes.ButtonDiv}>
                {GetFeatures(ProductData.featureList)}
            </div>
        </div>

    )
}

export default rightComponent;