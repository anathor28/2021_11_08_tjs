import React from "react";
// import logo from './logo.svg';
import "./App.css";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { ADR_REST, RESSOURCES } from "./config/config";
import { ACTIONS_RESSOURCES, initialCurrentMeme } from "./store/store";
import { connect } from "react-redux";
import ThumbnailLayout from "./components/ThumbnailLayout/ThumbnailLayout";

const App = (props) => {
  return (
    <>
      <div className="App">
        <ThumbnailLayout>
          {props.memes.map((e, i) => (
            <MemeViewer
              meme={e}
              img={props.images.find((ee) => ee.id === e.imageId)}
              key={"thumbnail-" + i}
            />
          ))}
        </ThumbnailLayout>
        <FlexLayout>
          <MemeViewer
            meme={props.current}
            img={props.images.find((e) => e.id === props.current.imageId)}
          />

          <MemeForm />
        </FlexLayout>
      </div>
      <div>{JSON.stringify(props)}</div>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    images: state.ressources.images,
    memes: state.ressources.memes,
    current: state.current,
  };
}
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
