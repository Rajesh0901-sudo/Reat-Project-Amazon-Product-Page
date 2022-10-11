import React from 'react';
import logo from './NicePng_amazon-logo-png_167642.png'
import classes from './navBar.module.css';

const navBar = ()=>{
    return (
        <div className={classes.navBar}>
            <div >
                <img className={classes.navBrand} src={logo}></img>
            </div> 
        </div>
    )
};

export default navBar;