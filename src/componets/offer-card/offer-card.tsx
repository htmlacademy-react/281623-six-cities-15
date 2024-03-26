import { Link } from 'react-router-dom';
import { TOffer } from '../../types/types';
import { AppRoute } from '../../app/router/router/router';
import { getRatingStars } from '../../util';
import { MAX_RATING } from '../../const';

type OfferCardProps = {
  offer: TOffer;
  handleHover: (offer?: TOffer) => void;
}

export default function OfferCard ({offer, handleHover}: OfferCardProps): JSX.Element {
  const {price,rating,type, title, isPremium, isFavorite, images} = offer;

  const bookmarksButtonClassName = `place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`;

  const handleHoverMouseOn = () => {
    handleHover(offer);
  };

  const handleHoverMouseOff = () => {
    handleHover();
  };

  return (
    <Link to={`${AppRoute.Offer}/${offer.id}`}>
      <article
        className="cities__card place-card"
        onMouseEnter={handleHoverMouseOn}
        onMouseLeave={handleHoverMouseOff}
      >
        {
          isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <span>
            <img
              className="place-card__image"
              src={images.find((src)=> ({src}))}
              width={260}
              height={200}
              alt="Place image"
            />
          </span>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;
              /&nbsp;night
              </span>
            </div>
            <button
              className={bookmarksButtonClassName}
              type="button"
            >
              <svg
                className="place-card__bookmark-icon"
                width={18}
                height={19}
              >
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">In bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${getRatingStars(rating, MAX_RATING)}%` }} />
              <span className="visually-hidden">{rating}</span>
            </div>
          </div>
          <h2 className="place-card__name">
            {title}
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    </Link>
  );
}
