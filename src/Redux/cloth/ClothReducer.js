import { Buy_Cloth } from "./clothTypes";

const initialState = {
  numOfCloth: 0,
};
const ClothReducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_Cloth:
      return {
        ...state,
        numOfCloth: state.numOfCloth + 1,
      };
    default:
      return state;
  }
};
export default ClothReducer;
