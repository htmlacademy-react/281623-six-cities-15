import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import Reviews from '../../componets/reviews/review';
import { AuthorizationStatus } from '../../app/router/router/router';
import Map from '../../componets/map/map';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { TComment } from '../../types/types';
//import { getRatingStars } from '../../util';
//import { MAX_RATING } from '../../const';
import { offerPageSelector } from '../../store/slices/slice-offer';
import { useEffect } from 'react';
import { fetchNearBy, fetchOffer } from '../../store/thunk/offers-api';
import Spinner from '../../componets/spinner-coponent/spinner';
import Header from '../../componets/header/header';
import NearByOffers from '../../componets/nearByOffers/nearByOffers';
import { offersSelectors } from '../../store/slices/slice-offers';


type OfferPageProps = {
  comments: TComment[];
  authorizationStatus: AuthorizationStatus;
}

export default function OfferPage ({comments, authorizationStatus}: OfferPageProps): JSX.Element {
  const dispatchOfferPage = useAppDispatch();
  const currentCity = useAppSelector(offersSelectors.currentCity);
  const offerPage = useAppSelector(offerPageSelector.offerPage);
  const nearby = useAppSelector(offerPageSelector.nearByOffer);
  const {id} = useParams();
  const offerId = id?.trim() ?? '';

  useEffect(() => {
    dispatchOfferPage(fetchOffer(offerId));
  },[dispatchOfferPage, offerId]);

  useEffect(() => {
    dispatchOfferPage(fetchOffer(offerId));
  }, [dispatchOfferPage, offerId]);

  useEffect(() => {
    dispatchOfferPage(fetchNearBy(offerId));
  }, [dispatchOfferPage, offerId]);

  if(offerId === '') {
    return <NotFoundPage/>;
  }

  if (!offerPage) {
    return <Spinner/>;
  }


  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                {/* {images.map((item)=> {
                  <img
                    className="offer__image"
                    src={item}
                    alt="Photo studio"
                  />;
                })} */}
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {/* {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null} */}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {/* {title} */}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  {/* <span style={{ width: `${getRatingStars(rating, MAX_RATING)}%` }} /> */}
                  <span className="visually-hidden">Rating</span>
                </div>
                {/* <span className="offer__rating-value rating__value">{rating}</span> */}
              </div>
              <ul className="offer__features">
                {/* <li className="offer__feature offer__feature--entire">{type}</li> */}
                <li className="offer__feature offer__feature--bedrooms">
                  {/* {bedrooms} Bedrooms */}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {/* Max {maxAdults} adults */}
                </li>
              </ul>
              <div className="offer__price">
                {/* <b className="offer__price-value">&euro;{price}</b> */}
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                {/* <h2 className="offer__inside-title">{title}</h2> */}
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">Wi-Fi</li>
                  <li className="offer__inside-item">Washing machine</li>
                  <li className="offer__inside-item">Towels</li>
                  <li className="offer__inside-item">Heating</li>
                  <li className="offer__inside-item">Coffee machine</li>
                  <li className="offer__inside-item">Baby seat</li>
                  <li className="offer__inside-item">Kitchen</li>
                  <li className="offer__inside-item">Dishwasher</li>
                  <li className="offer__inside-item">Cabel TV</li>
                  <li className="offer__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      // src={images}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">nene</span>
                  <span className="offer__user-status">rt</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {/* {description} */}
                  </p>
                  <p className="offer__text">
                    {/* {description} */}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                {
                  <Reviews
                    comments={comments}
                    isAuth = {authorizationStatus === AuthorizationStatus.Auth}
                  />
                }
              </section>
            </div>
          </div>
          <Map
            className='offer__map'
            city={currentCity}
            offers={nearby}
            activeOffer={offerId}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {
                nearby.map((nearBy) => (
                  <NearByOffers
                    key={nearBy.id}
                    nearBy = {nearBy}
                  />))
              }
            </div>
          </section>
        </div>
      </main>
    </div>


  );
}
