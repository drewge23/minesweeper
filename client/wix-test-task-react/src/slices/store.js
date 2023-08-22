import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gameReducer from "./gameSlice";

const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
})

const store = configureStore({
    reducer: rootReducer
})

export default store