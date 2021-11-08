import React from "react";
import PropTypes from 'prop-types';
import style from './Button.module.css'
const Button = (props) => {
    console.log(props);
    return (<button onClick={(evt)=>props.onButtonClick()} className={style.Button}>{props.children}</button>);
};
Button.propTypes={
    children: PropTypes.any.isRequired,
    onButtonClick: PropTypes.func.isRequired
}
export default Button;