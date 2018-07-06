import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {routerMiddleware} from "react-router-redux";
import thunkMiddleware from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import {loadState, saveState} from "./localStorage";
import phoneBookReducer from './reducers/phonebook';


const rootReducer = combineReducers({
    phoneBook: phoneBookReducer
});

export const history = createHistory();

const middleware = [
    thunkMiddleware,
    routerMiddleware(history),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
         phoneBook: store.getState().phoneBook
    });
});

export default store;