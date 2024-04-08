import FavoriteList from '../../componets/favorite-list/favorite-list';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/slice-offers';
import Header from '../../componets/header/header';


export default function FavoritePage (): JSX.Element {

  const offers = useAppSelector(offersSelectors.offers);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {
              offers.slice(1,2).map((offer) => (
                <FavoriteList
                  key={offer.id}
                  offer = {offer}
                />))
            }
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}
