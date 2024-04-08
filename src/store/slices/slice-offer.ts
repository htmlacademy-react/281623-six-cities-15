import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { FullOffer, TOffer } from '../../types/types';
import { fetchNearBy, fetchOffer } from '../thunk/offers-api';


type OfferPageState = {
    info: FullOffer[] | null;
    nearby: TOffer[];
    status: RequestStatus;
}

const initialState: OfferPageState = {
  info: null,
  nearby: [],
  status: RequestStatus.Idle,
};


export const offerPageSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.info = action.payload;
        state.status = RequestStatus.Success;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchOffer.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchNearBy.fulfilled, (state, action) => {
        state.nearby = action.payload;
      }),
  initialState,
  name: 'offer',
  reducers: {
    clear(state) {
      state.info = null;
      state.nearby = [];
    }
  },
  selectors: {
    nearByOffer: (state: OfferPageState) => state.nearby,
    offerPage: (state: OfferPageState) => state.info,
    offerPageStatus: (state: OfferPageState) => state.status,
  }
});

export const offerPageAction = offerPageSlice.actions;
export const { clear } = offerPageSlice.actions;
export const offerPageSelector = offerPageSlice.selectors;
