import ProductData from '../ProductData' ;
import React from "react";
import classes from './rightComponent.module.css'


const rightComponent =(props)=>{


     return (
            <div>      
                <h1>{ProductData.title}</h1>
                <br></br>
                <p>{ProductData.description}</p>
                <br></br><br></br>
                <h4>Select Color</h4>
            
                <div className='color'>
                    {
                        props.data.colorOptions.map((item,pos)=>{
                            // const classArr = [classes.rightImage]
                            // if(pos===0){
                            //     classArr.push(classes.Active) 
                            // }
                            
                            return(
                            <img key={pos} className={classes.rightImage} src={item.imageUrl} alt={item.styleName} onClick = {()=>props.onColoroptionClick(pos)}></img>
                            )
                        })
                    }
                </div> 
                
                <h4>Features</h4>
                <div className={classes.ButtonDiv}>
                    {
                         props.data.featureList.map((item,pos)=>{
                            // const classArr = [classes.btn]
                            // if(pos===0){
                            //     classArr.push(classes.Active) 
                            // }
                            return (
                                <button key={pos} className={classes.btn} onClick={()=>props.onFeatureButtonClick(pos)}>{item}</button>       
                            )
                        })
                    }
                </div>
            </div>
     )
}

export default rightComponent;