import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export const ModalWithStore = (props) => {
  console.log('modal props',props)
  return (
    <>{JSON.stringify(props)}
    <Modal isOpen={props.show} contentLabel={props.label} style={customStyles}>
      {props.children}
    </Modal>
    </>
  );
};

const mapStateToProps = (state, own) => {
  return {
    ...own,
    show:state.modal.show,
    label:state.modal.label,
    children:state.modal.children
  };
};

const mapDispatchToProps = (dispatch) => {return {}};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWithStore);
