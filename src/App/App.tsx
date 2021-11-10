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
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = (props) => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/">
            <h1>Deguemer mat in breizh meme generator</h1>
            <h2>Selectionner dans le menu</h2>
            le liens a afficher dans la page
          </Route>
          <Route path="/thumbnail">
            <ThumbnailLayout>
              {props.memes.map((e, i) => (
                <MemeViewer
                  meme={e}
                  img={props.images.find((ee) => ee.id === e.imageId)}
                  key={"thumbnail-" + i}
                />
              ))}
            </ThumbnailLayout>
          </Route>

          <Route path="/editor">
            <FlexLayout>
              <MemeViewer
                meme={props.current}
                img={props.images.find((e) => e.id === props.current.imageId)}
              />

              <MemeForm />
            </FlexLayout>
          </Route>
        </Switch>
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
