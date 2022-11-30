import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as JobReducer } from "./Job/job.reducer";
const store=legacy_createStore(JobReducer,applyMiddleware(thunk))
export {store}