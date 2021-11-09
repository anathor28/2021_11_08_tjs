const initialState = {
  memes: [],
  images: [],
};
const ACTIONS_RESSOURCES = Object.freeze({
  FILL_IMAGES: "FILL_IMAGES",
  FILL_MEMES: "FILL_MEMES",
  ADD_MEME: "ADD_MEME",
});
const ressourcesReducer = (state = initialState, action) => {
  switch (action.type) {
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
let state=ressourcesReducer(undefined,{type:'INIT'});
console.log(state);
state=ressourcesReducer(state,{type:ACTIONS_RESSOURCES.FILL_IMAGES,values:[{id:0},{id:1}]});
console.log(state);
state=ressourcesReducer(state,{type:ACTIONS_RESSOURCES.FILL_MEMES,values:[{id:5},{id:9}]});
console.log(state);
state=ressourcesReducer(state,{type:ACTIONS_RESSOURCES.ADD_MEME,value:{id:125}});
console.log(state);