import React, { useState } from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";
const Button = (props) => {
  const [isClicked, setisClicked] = useState(false);
  console.log(props);
  return (
    <button
      onClick={(evt) => {
          setisClicked(true);
          setTimeout(()=>{
            setisClicked(false);
          },300);
          props.onButtonClick()
          }}
      className={`${style.Button}${isClicked?' '+style.clicked:''}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style,
      }}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.any.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
Button.defaultProps = {
  children: "Text du button manquant",
  // bgColor: 'skyblue'
};
export default Button;
