import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "./AppState.Model";

const getAppstate=createFeatureSelector<AppStateModel>('app');

export const getspinnerstate=createSelector(getAppstate,(state)=>{
    return state.IsLoaded;
});