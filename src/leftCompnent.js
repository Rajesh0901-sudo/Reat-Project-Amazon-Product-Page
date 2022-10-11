import React from "react";
import classes from './leftComponent.module.css'

class leftComponent extends React.Component{

   


    render(){
        console.log(this.state);
        return (
            <div className={classes.lefImagetDiv} >
                <img className={classes.image} src="https://imgur.com/iOeUBV7.png" alt='xyz'></img>
                <div className={classes.text}>
                    <h3>00:00</h3>
                </div>            
            </div>
        )
    }
}

export default leftComponent;