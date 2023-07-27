import { createReducer, on } from "@ngrx/store";
import { GlobalState } from "./Gloabal.state";
import { loadspinner } from "./App.Action";

const _AppReducer = createReducer(GlobalState,

    on(loadspinner, (state, action) => {
        return {
            ...state,
            IsLoaded: action.isloaded
        }
    })


)

export function AppReducer(state: any, action: any) {
    return _AppReducer(state, action);

}