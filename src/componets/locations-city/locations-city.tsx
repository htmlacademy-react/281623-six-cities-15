import { TCity } from '../../types/types';

type LocationCityProps = {
    currentCity: TCity;
  }

export default function LocationsCity ({currentCity}: LocationCityProps): JSX.Element {

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{currentCity.name}</span>
      </a>
    </li>
  );
}
