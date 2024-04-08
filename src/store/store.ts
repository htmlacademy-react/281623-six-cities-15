import { combineReducers } from '@reduxjs/toolkit';
import { offersSlice } from './slices/slice-offers';
import { offerPageSlice } from './slices/slice-offer';


export const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [offerPageSlice.name]: offerPageSlice.reducer,
});
