import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { properties } from "../App";

function Favorites() {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteProperties = properties.filter((property) =>
    favorites.includes(property.id)
  );

  return (
    <main className="favorites-page">
      <section className="favorites-header">
        <p className="section-eyebrow">YOUR SAVED PROPERTIES</p>

        <h1>Favorites</h1>

        <p>
          Keep track of the properties you're interested in and
          revisit them whenever you're ready.
        </p>
      </section>

      {favoriteProperties.length === 0 ? (
        <section className="favorites-empty">
          <h2>No saved properties yet.</h2>

          <p>
            Browse our available properties and tap the heart icon
            to save your favorites.
          </p>

          <Link to="/properties" className="primary-button">
            Explore Properties
          </Link>
        </section>
      ) : (
        <section className="favorites-listing">
          <div className="property-grid">
            {favoriteProperties.map((property) => (
              <article
                className="property-card"
                key={property.id}
              >
                <div className="property-image-wrapper">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="property-image"
                  />

                  <span className="property-status">
                    {property.listing}
                  </span>

                  <button
                    className="favorite-button active"
                    onClick={() => toggleFavorite(property.id)}
                    aria-label="Remove from favorites"
                  >
                    ♥
                  </button>
                </div>

                <div className="property-content">
                  <p className="property-location">
                    {property.location}
                  </p>

                  <h3>{property.name}</h3>

                  <p className="property-price">
                    {property.price}
                  </p>

                  <div className="property-details">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.propertyType}</span>
                  </div>

                  <Link
                    to={`/properties/${property.id}`}
                    className="property-link"
                  >
                    View Property →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default Favorites;