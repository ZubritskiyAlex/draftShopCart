import {logger} from "redux-logger";
import rootReducer from './reducers';
import {applyMiddleware, createStore} from "redux";

export default  () => {
    const store = createStore(rootReducer, applyMiddleware(logger))
    return store;
};