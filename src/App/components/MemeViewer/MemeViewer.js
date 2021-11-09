import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.scss";

const MemeViewer = (props) => {
  console.log(props);
  return (
    <svg className={styles.MemeViewer} data-testid="MemeViewer" viewBox={`0 0 ${props.img.w} ${props.img.h}`}>
      <image href={props.img.url} />
      <text
        x={props.meme.x}
        y={props.meme.y}
        fill={props.meme.color}
        textDecoration={props.meme.underline ? "underline" : "none"}
        fontStyle={props.meme.italic?'italic':'normal'}
        fontSize={props.meme.fontSize}
        fontWeight={props.meme.fontWeight}
      >
        {props.meme.text}
      </text>
    </svg>
  );
};

MemeViewer.propTypes = {
  meme: PropTypes.object.isRequired,
  img: PropTypes.object,
};

MemeViewer.defaultProps = {};

export default MemeViewer;
