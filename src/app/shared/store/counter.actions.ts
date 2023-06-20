import { createAction, props } from "@ngrx/store";

export const increment = createAction("increcent")
export const decrement = createAction("decrement")
export const reset = createAction("reset")
export const customincrement = createAction("customincrement", props<{ value: number, action: string }>())
export const changechannelname = createAction("changechannelname", props<{ channel: string }>())