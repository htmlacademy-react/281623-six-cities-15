import { TCity, TOffer} from '../../types/types';
import { CITIES_LOCATION} from '../../const';
import { offers } from '../../mocks/mock';
import { PayloadAction,createSlice } from '@reduxjs/toolkit';


type OffersState = {
    currentCity: TCity;
    offers: TOffer[];
}

const initialState: OffersState = {
  currentCity: CITIES_LOCATION[0],
  offers,
};


export const offersSlice = createSlice({
  initialState,
  name: 'offers',
  reducers: {
    setCurrentCity: (state, action: PayloadAction<TCity>) => {
      state.currentCity = action.payload;
    },
  },
  selectors: {
    currentCity: (state: OffersState) => state.currentCity,
    offers: (state: OffersState) => state.offers,
  }
});

export const offersActions = offersSlice.actions;
export const offersSelectors = offersSlice.selectors;
