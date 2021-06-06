import {combineReducers, createStore} from "redux";
import {mainReducer} from "../bll/mainReducer";

const rootReducer = combineReducers({
    main: mainReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
// @ts-ignore
window.store = store;