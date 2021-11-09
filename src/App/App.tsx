import React from "react";
// import logo from './logo.svg';
import "./App.css";
import FlexLayout from "./components/FlexLayout/FlexLayout";
import MemeForm from "./components/MemeForm/MemeForm";
import MemeViewer from "./components/MemeViewer/MemeViewer";
import { ADR_REST, RESSOURCES } from "./config/config";
const initialCurrentMeme={
        titre: "",
        text: "",
        x: 50,
        y: 50,
        color: '#ACACAC',
        underline: true,
        italic: true,
        fontWeight: "900",
        fontSize: 24,
        fx: 100,
        fy: 100,
        imageId: 0,
      };
class App extends React.Component {
  state: any;
  constructor(props) {
    super(props);
    this.state = {
      currentMeme: initialCurrentMeme,
      images: [],
      memes:[]
    };
  }
  componentDidMount(){
    const f1=fetch(`${ADR_REST}${RESSOURCES.memes}`).then(f=>f.json());
    const f2=fetch(`${ADR_REST}${RESSOURCES.images}`).then(f=>f.json());
    Promise.all([f1,f2]).then(arrResp=>{
      this.setState({
        images:arrResp[1],
        memes:arrResp[0]
      });
    });
  }
  componentDidUpdate() {}
  render() {
    return (
      <>
      <div className="App">
      <FlexLayout>
        <MemeViewer
          meme={this.state.currentMeme}
          img={this.state.images.find(
            (e) => e.id === this.state.currentMeme.imageId
          )}
        />
        <MemeForm currentMeme={this.state.currentMeme} images={this.state.images} onCurrentChange={(updatedMeme)=>{
          this.setState({currentMeme:updatedMeme});
        }}/>
        </FlexLayout>
      </div>
      <div>{JSON.stringify(this.state)}</div>
      </>
    );
  }
}

export default App;
