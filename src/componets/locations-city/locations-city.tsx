import { TCity } from '../../types/types';

type CityProps = {
    city: TCity;
    isActive?: string;
  }

export default function City ({city,isActive}: CityProps): JSX.Element {

  return (
    <li className="locations__item">
      <span className={`locations__item-link tabs__item${isActive === city.name ? ' tabs__item--active' : ''}`}>
        <span>{city.name}</span>
      </span>
    </li>
  );
}
