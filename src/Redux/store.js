import { createStore } from "redux";
import ClothReducer from "./cloth/ClothReducer";

const store = createStore(ClothReducer);
export default store;
