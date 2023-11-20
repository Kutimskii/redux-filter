import { FILTER_SERVICE_LIST } from "../actions/actionTypes";
const initialState=[];
export default function serviceFilterReducer(state = initialState, action){
  switch (action.type) {
    case FILTER_SERVICE_LIST:
      const list = action.payload;
      return list
    default:
      return state;
  }
}