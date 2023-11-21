import { createStore } from "redux";
import useReducer from "./Reducer/user.reducer";

const Storage = createStore(useReducer);

export default Storage;