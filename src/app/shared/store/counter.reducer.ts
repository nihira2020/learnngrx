import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";
import { initialState } from "./counter.state";

const _counterReducer = createReducer(initialState,
    on(increment, (state) => {
        return {
            ...state,
            counter: state.counter + 1
        };
    }),
    on(decrement, (state) => {
        return {
            ...state,
            counter: state.counter - 1
        };
    }),
    on(reset, (state) => {
        return {
            ...state,
            counter: 0
        };
    })

)

export function counterReducer(state: any, action: any) {
    return _counterReducer(state, action);

}