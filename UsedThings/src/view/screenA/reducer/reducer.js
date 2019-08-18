
import initStore from "../../../config/store/initStore";
import { INCREMENT, DECREMENT, INCREMENT_SUCCESS, DECREMENT_SUCCESS } from "../action/actionTypes/actionTypes";

//state không thay đổi, chỉ trả về giá trị cuối cùng
const counterReducers = (state = initStore, action) => {
  switch (action.type) {
    case INCREMENT_SUCCESS:
      return {
        ...state,
        index: state.index + action.step
      };
    case DECREMENT_SUCCESS:
      return {
        ...state,
        index: state.index - action.step
      };
    default:
      return state;
  }
};

export default counterReducers;
