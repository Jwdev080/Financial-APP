import {combineReducers, createStore} from "redux";
import { projectReducer } from './reducers/projects';
import {activityReducer} from "./reducers/activities";
import {incomeReducer} from "./reducers/incomes";
import {outcomeReducer} from "./reducers/outcomes";
import {utilityReducer} from "./reducers/utility";
import {layoutReducer} from './reducers/layout';

const rootReducer = combineReducers({
    project: projectReducer,
    activity: activityReducer,
    income: incomeReducer,
    outcome: outcomeReducer,
    utility: utilityReducer,
    layout: layoutReducer
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);