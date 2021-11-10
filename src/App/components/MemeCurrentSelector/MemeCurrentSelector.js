import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./MemeCurrentSelector.module.scss";
import { connect } from "react-redux";
import { ACTIONS_CURRENT } from "../../store/store";
import { withRouter } from 'react-router-dom'

const MemeCurrentSelector = (props) => {
  useEffect(() => {
    //  did mount
    if(undefined!==props.match.params.idmeme)
    {
      props.selectMeme(props.memes.find(e=>e.id===Number(props.match.params.idmeme)))
    }
    return () => {
      props.clearMeme()
    }
  }, [props.memes])
  return <>{props.children}</>;
};

MemeCurrentSelector.propTypes = {
  children: PropTypes.any.isRequired,
};

MemeCurrentSelector.defaultProps = {};
function mstp(state, own) {
  return {
    ...own,
    memes: state.ressources.memes,
  };
}
function mdtp(dispatch) {
  return {
    selectMeme: (meme) =>
      dispatch({ type: ACTIONS_CURRENT.UPDATE_CURRENT, value: meme }),
    clearMeme: () => dispatch({ type: ACTIONS_CURRENT.CLEAR_CURRENT }),
  };
}
export default withRouter(connect(mstp, mdtp)(MemeCurrentSelector));
