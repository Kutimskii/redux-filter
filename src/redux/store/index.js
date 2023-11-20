import { legacy_createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceAddReducer from '../reducers/serviceAddReducer';
import serviceFilterReducer from '../reducers/serviceFilterReducer';
const reducer = combineReducers({
serviceList:serviceListReducer,
serviceAdd:serviceAddReducer,
serviceFilter:serviceFilterReducer,
});
const store = legacy_createStore(reducer);
export default store;