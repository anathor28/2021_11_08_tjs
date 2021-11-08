import React from "react";
import style from './Button.module.css'
const Button = (props) => {
    console.log(props);
    return (<button onClick={(evt)=>{
        console.log(evt);
        alert('On a clické sur benjamin!!!');
    }} className={style.Button}>{props.children}</button>);
};

export default Button;