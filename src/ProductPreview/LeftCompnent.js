import React from "react";
import classes from './leftComponent.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

const leftComponent = (props)=>{


        
    return (
        <div className={classes.lefImagetDiv} >
            <img className={classes.image} src={props.currentLeftImage} alt='xyz'></img>
            <div className={classes.text}>
                {
                    props.showHeartBit ? 
                        <><div className={classes.heartbit}> <i  class="fa-solid fa-heart-pulse">
                        </i></div><h3>72</h3></>
                    :
                        <h3>{`${new Date().getHours()} : ${new Date().getMinutes()}`}</h3>

                }       
            </div>            
        </div>
    )
    
}

export default leftComponent;