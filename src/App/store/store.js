import { createStore, combineReducers } from "redux";
import { ADR_REST, RESSOURCES } from "../config/config";
export const initialState = {
  memes: [],
  images: [],
};
export const ACTIONS_RESSOURCES = Object.freeze({
  FILL_IMAGES: "FILL_IMAGES",
  FILL_MEMES: "FILL_MEMES",
  ADD_MEME: "ADD_MEME",
  //SELECT_MEME_TO_CURRENT:'SELECT_MEME_TO_CURRENT,'
});
/**
 * Reducer de l'etat des ressources
 * @param {object} state etat du store pour ce reducer
 * @param {object} action type et value/values
 * @returns new state instance
 */
const ressourcesReducer = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case "INIT":
      const f1 = fetch(`${ADR_REST}${RESSOURCES.memes}`).then((f) => f.json());
      const f2 = fetch(`${ADR_REST}${RESSOURCES.images}`).then((f) => f.json());
      Promise.all([f1, f2]).then((arrResp) => {
        store.dispatch({type:'FILL_ALL',values:[arrResp[1],arrResp[0]]})
      });
      return state;
    case "FILL_ALL":
      return {
        ...state,
        images: [...action.values[0]],
        memes: [...action.values[1]],
      };

    case ACTIONS_RESSOURCES.FILL_IMAGES:
      return { ...state, images: [...action.values] };
    case ACTIONS_RESSOURCES.FILL_MEMES:
      return { ...state, memes: [...action.values] };
    case ACTIONS_RESSOURCES.ADD_MEME:
        const index=state.memes.findIndex(e=>e.id===action.value.id);
        if(index===-1){return { ...state, memes: [...state.memes, action.value] };}
        else{
           return  { ...state, memes: [...state.memes.slice(0,index),action.value,...state.memes.slice(index+1)] };
        }
    // case ACTIONS_RESSOURCES.SELECT_MEME_TO_CURRENT:
    //     store.dispatch({type:ACTIONS_CURRENT.UPDATE_CURRENT, value: state.memes.find(e=>e.id===action.value)});
    //   return state;
    default:
      return state;
  }
};

export const initialCurrentMeme = {
  titre: "",
  text: "",
  x: 50,
  y: 50,
  color: "#ACACAC",
  underline: true,
  italic: true,
  fontWeight: "900",
  fontSize: 24,
  fx: 100,
  fy: 100,
  imageId: 0,
};
export const ACTIONS_CURRENT = Object.freeze({
  UPDATE_CURRENT: "UPDATE_CURRENT",
  CLEAR_CURRENT: "CLEAR_CURRENT",
  SAVE_CURRENT: "SAVE_CURRENT"
});
const currentReducer = (state = initialCurrentMeme, action) => {
  console.log("call de currentReducer", action.type);
  switch (action.type) {
    case ACTIONS_CURRENT.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case ACTIONS_CURRENT.CLEAR_CURRENT:
      return { ...initialCurrentMeme };
    case ACTIONS_CURRENT.SAVE_CURRENT:
        //fetch conditionnel si ID defined on met à jour si ID undefined on post un nouveau
        fetch(`${ADR_REST}${RESSOURCES.memes}${undefined!==state.id?'/'+state.id:''}`, {
            method:undefined!==state.id?'PUT':'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(state)
        })  
            .then(f=>f.json())
            .then(obj=>{
                store.dispatch({type:ACTIONS_RESSOURCES.ADD_MEME,value:obj});
            })
        return state;
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ ressources: ressourcesReducer, current: currentReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INIT'
});
export default store;
