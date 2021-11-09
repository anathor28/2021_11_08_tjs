import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";
const Button = (props) => {
  const [isClicked, setisClicked] = useState({clicked:false,uneValue:0});
   
  useEffect(() => {
      //cmp didMount & didUpdate
      console.log(isClicked);
    return () => {
     //did unmount
    };
  }, [isClicked])
  
  return (
    <button
      onClick={(evt) => {
          setisClicked({...isClicked, clicked:true});
          setTimeout(()=>{
            setisClicked({...isClicked, clicked:false});
          },300);
          props.onButtonClick()
          }}
      className={`${style.Button}${isClicked.clicked?' '+style.clicked:''}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style,
      }}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.any.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
Button.defaultProps = {
  children: "Text du button manquant",
  // bgColor: 'skyblue'
};
export default Button;
