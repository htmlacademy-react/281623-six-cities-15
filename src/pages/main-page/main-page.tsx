import { useState } from 'react';
import Logo from '../../componets/logo/logo';
import OfferCard from '../../componets/offer-card/offer-card';
import { TOffer } from '../../types/types';
import { Nullable } from 'vitest';
//import Map from '../../componets/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { CITIES_LOCATION } from '../../const';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { AppRoute } from '../../app/router/router/router';
import { offersActions, offersSelectors } from '../../store/slices/slice';


export default function MainPage (): JSX.Element {
  const [/*activeOffer*/, setActiveOffer] = useState<Nullable<TOffer>>(null);
  const handleHover = (offer?: TOffer) => {
    setActiveOffer(offer || null);
  };

  const offers = useAppSelector(offersSelectors.offers);
  const currentCity = useAppSelector(offersSelectors.city);


  const dispatch = useAppDispatch();

  const currentOffers = offers.filter((offer) => offer.city.name === currentCity);

  const isEmty = currentOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty': isEmty})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {CITIES_LOCATION.map((city) => (
                <li className="locations__item" key={city.name}>
                  <Link
                    className={classNames('locations__item-link', 'tabs__item',{'tabs__item--active':
                currentCity === city.name})}
                    onClick={(evt) => {
                      evt.preventDefault();
                      dispatch(offersActions.setCity(city.name));
                    }}
                    to={AppRoute.Main}
                  >
                    <span>{city.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} place{offers.length > 1 && 's'} to stay in Amsterdam
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {
                  offers.length > 0 && offers.map((offer) => (
                    <OfferCard
                      key={offer.id}
                      offer = {offer}
                      handleHover={handleHover}
                    />))
                }
              </div>
            </section>
            <div className="cities__right-section">
              {/* <Map
                className='cities__map'
                currentCity={currentCity}
                offers={offers}
                activeOffer={activeOffer}
              /> */}
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}
