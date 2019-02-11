import { combineReducers } from 'redux'
/*
 * This is the root state of the app
 * It contains every substate of the app
 */
export interface State {
}

/*
 * initialState of the app
 */
export const initialState: State = {
};



/*
 * Root reducer of the app
 * Returned reducer will be of type Reducer<State>
 */
export const reducer = combineReducers<State>({
});

