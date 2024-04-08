import { AxiosInstance } from 'axios';
import { FullOffer, TOffer } from '../../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute } from '../../const';

export const fetchAllOffers = createAsyncThunk<TOffer[], undefined, { extra: AxiosInstance}>
('fetchOffers/all', async (_arg, { extra: api}) => {
  const response = await api.get<TOffer[]>(APIRoute.Offers);
  return response.data;
});

export const fetchOffer = createAsyncThunk<FullOffer[], string, { extra: AxiosInstance}>
('fetchOffers/one', async (offerId, { extra: api}) => {
  const response = await api.get<FullOffer[]>(`${APIRoute.Offers}/${offerId}`);
  return response.data;
});

export const fetchNearBy = createAsyncThunk<TOffer[], string, { extra: AxiosInstance}>
('fetchOffers/near', async (offerId, { extra: api}) => {
  const response = await api.get<TOffer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
  return response.data;
});
