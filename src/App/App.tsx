import React from "react";
// import logo from './logo.svg';
import "./App.css";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { connect } from "react-redux";
import ThumbnailLayout from "./components/ThumbnailLayout/ThumbnailLayout";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MemeCurrentSelector from "./components/MemeCurrentSelector/MemeCurrentSelector";

const App = (props) => {
  return (
    <>
      <Navbar />
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <h1>Deguemer mat in breizh meme generator</h1>
            <h2>Selectionner dans le menu</h2>
            le liens a afficher dans la page
          </Route>
          <Route path="/thumbnail">
            <ThumbnailLayout>
              {props.memes.map((e, i) => (
                <Link to={"/editor/"+e.id}   key={"thumbnail-" + i}>
                <MemeViewer
                  meme={e}
                  img={props.images.find((ee) => ee.id === e.imageId)}
                />
                </Link>
              ))}
            </ThumbnailLayout>
          </Route>
          <Route path="/editor" exact>
            <FlexLayout>
              <MemeViewer
                meme={props.current}
                img={props.images.find((e) => e.id === props.current.imageId)}
              />
              <MemeForm />
            </FlexLayout>
          </Route>
          <Route path="/editor/:idmeme">
            <h1>editor of existing meme</h1>
            <MemeCurrentSelector>
            <FlexLayout>
              <MemeViewer
                meme={props.current}
                img={props.images.find((e) => e.id === props.current.imageId)}
              />
              <MemeForm />
            </FlexLayout>
            </MemeCurrentSelector>
          </Route>
          {/* Redirection sur un chemin */}
          <Route path="/redirected">
            <Redirect to="/" />
          </Route>
          {/* ramasse miette d'url invalid */}
          <Route path="/">
            <h1>ERROR 404 !!! NOT FOUND !!!</h1>
            Nothing to view here ....
            <Link to="/">Retour accueil</Link>
          </Route>
        </Switch>
      </div>
      {/* <div>{JSON.stringify(props)}</div> */}
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
