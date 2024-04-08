import { SortingTypes } from './const';
import { TOffer } from './types/types';

export function getRatingStars(rating: number, maxRating: number) {
  return Math.round(rating / maxRating * 100);
}

export const sort = (offers: TOffer[], currentSortingType: SortingTypes): TOffer[] => {
  switch (currentSortingType) {
    case SortingTypes.PriceHighLow:
      return offers.toSorted((a, b) => b.price - a.price);

    case SortingTypes.PriceLowHigh:
      return offers.toSorted((a, b) => a.price - b.price);

    case SortingTypes.TopRated:
      return offers.toSorted((a, b) => b.rating - a.rating);

    default:
      return offers;
  }
};

export const getBedroomsText = (bedrooms: number) => `${bedrooms} Bedroom${bedrooms > 1 ? 's' : ''}`;
export const getAdultsText = (adults: number) => `Max ${adults} adult${adults > 1 ? 's' : ''}`;

