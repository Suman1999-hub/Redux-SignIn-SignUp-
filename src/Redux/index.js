import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const initialState = {
  storeData: "",
};

const loginReducer = (state = initialState, action) => {
  // console.log("Reducer action:", action); // Add this line
  switch (action.type) {
    case "SET_STORE_DATA":
      return {
        ...state,
        token: action.token,
        data: action.data,
      };
    case "SET_UPDATE_DATA":
      return {
        ...state,

        data: action.data,
      };
    case "SET_LOGOUT_USER":
      return {
        ...state,
        token: null,
        data: null,
      };
    default:
      return state;
  }
};

const persistConfig = {
  key: "abcd",
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistedStore = persistStore(store);

console.log("Initial state:", store.getState()); // Ensure this outputs initial state correctly

export default store;
