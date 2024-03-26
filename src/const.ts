export const CITIES_LOCATION = [
  {
    location: {latitude: 48.85661, longitude: 2.351499, zoom: 13},
    name: 'Paris',
  },
  {
    location: {latitude: 50.938361, longitude: 6.959974, zoom: 13},
    name: 'Cologne',
  },
  {
    location: {latitude: 50.846557, longitude: 4.351697, zoom: 13},
    name: 'Brussels',
  },
  {
    location: {latitude: 52.37454, longitude: 4.897976, zoom: 13},
    name: 'Amsterdam',
  },
  {
    location: {latitude: 53.5753, longitude: 10.0153, zoom: 13},
    name: 'Hamburg',
  },
  {
    location: {latitude: 51.2217, longitude: 6.77616, zoom: 13},
    name: 'Dusseldorf',
  }
] as const;

export const SORT_OPTIONS =
 ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first']satisfies Record<SortOption, string>;

export enum SortOption {
  Popular = 0,
  PriceLowHigh = 1,
  PriceHighLow = 2,
  TopRated = 3
}


export const MAX_RATING = 5;
