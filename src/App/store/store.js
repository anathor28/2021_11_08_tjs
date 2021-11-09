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
      return { ...state, memes: [...state.memes, action.value] };
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
});
const currentReducer = (state = initialCurrentMeme, action) => {
  console.log("call de currentReducer", action.type);
  switch (action.type) {
    case ACTIONS_CURRENT.UPDATE_CURRENT:
      return { ...state, ...action.value };
    case ACTIONS_CURRENT.CLEAR_CURRENT:
      return { ...initialCurrentMeme };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ ressources: ressourcesReducer, current: currentReducer })
);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'INIT'
});
export default store;
