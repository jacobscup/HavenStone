import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FavoritesProvider } from "./context/FavoritesContext";
import { useFavorites } from "./context/FavoritesContext";
import Favorites from "./pages/Favorites";
import "./App.css";
const WHATSAPP_NUMBER = "2348000000000";

export const properties = [
 {
  id: 1,
  name: "The Aso Residence",
  location: "Asokoro, Abuja",
  price: "₦650,000,000",
  listing: "For Sale",
  propertyType: "Villa",
  beds: 5,
  baths: 5,
  image:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  ],
  area: "850 sqm",
parking: "2-Car Garage",
amenities: [
  "Swimming Pool",
  "Fitted Kitchen",
  "Private Garden",
  "24/7 Security",
],
description:
  "A refined five-bedroom residence in Asokoro, designed for comfortable family living with generous interiors, premium finishes and excellent outdoor space.",
},
 {
  id: 2,
  name: "Maitama Grand Villa",
  location: "Maitama, Abuja",
  price: "₦850m",
  listing: "For Sale",
  propertyType: "Villa",
  beds: 5,
  baths: 6,
  image:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  ],
  area: "1,200 sqm",
  parking: "3-Car Garage",
  amenities: [
    "Private Swimming Pool",
    "Fitted Kitchen",
    "Landscaped Garden",
    "24/7 Security",
  ],
  description:
    "A spacious five-bedroom villa in Maitama offering refined interiors, generous outdoor space and premium residential comfort in one of Abuja's most prestigious districts.",
},
  {
  id: 3,
  name: "Guzape Heights",
  location: "Guzape, Abuja",
  price: "₦420m",
  listing: "For Sale",
  propertyType: "House",
  beds: 4,
  baths: 4,
  image:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  ],
  area: "720 sqm",
  parking: "2-Car Garage",
  amenities: [
    "Modern Kitchen",
    "Private Garden",
    "Fitted Wardrobes",
    "24/7 Security",
  ],
  description:
    "A contemporary four-bedroom residence in Guzape featuring elegant interiors, practical living spaces and modern finishes designed for comfortable family living.",
},
  {
  id: 4,
  name: "Jabi Lake Apartments",
  location: "Jabi, Abuja",
  price: "₦185m",
  listing: "For Sale",
  propertyType: "Apartment",
  beds: 3,
  baths: 3,
  image:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  ],
  area: "280 sqm",
  parking: "2-Car Parking",
  amenities: [
    "Fitted Kitchen",
    "Balcony",
    "24/7 Security",
    "Swimming Pool",
  ],
  description:
    "A stylish three-bedroom apartment in Jabi offering modern interiors, generous living spaces and convenient access to the area's major lifestyle and business destinations.",
},
 {
  id: 5,
  name: "Katampe Garden Home",
  location: "Katampe, Abuja",
  price: "₦12m/year",
  listing: "For Rent",
  propertyType: "House",
  beds: 4,
  baths: 4,
  image:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
  ],
  area: "650 sqm",
  parking: "2-Car Garage",
  amenities: [
    "Private Garden",
    "Fitted Kitchen",
    "Servant Quarters",
    "24/7 Security",
  ],
  description:
    "A comfortable four-bedroom family home in Katampe with generous outdoor space, modern interiors and a peaceful residential setting.",
},
{
  id: 6,
  name: "Wuse II Luxury Apartment",
  location: "Wuse II, Abuja",
  price: "₦9.5m/year",
  listing: "For Rent",
  propertyType: "Apartment",
  beds: 3,
  baths: 3,
  image:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
  gallery: [
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  ],
  area: "240 sqm",
  parking: "2-Car Parking",
  amenities: [
    "Fitted Kitchen",
    "Balcony",
    "24/7 Security",
    "Backup Power",
  ],
  description:
    "A well-appointed three-bedroom apartment in Wuse II, combining modern interiors, comfortable living spaces and convenient access to Abuja's central business and lifestyle districts.",
},
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        HAVENSTONE
        <span>REALTY</span>
      </Link>

      <nav className="nav-links">
       <Link to="/">Home</Link>
<Link to="/properties">Properties</Link>
<Link to="/favorites">Favorites</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
      </nav>
      <button
  className="mobile-menu-button"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
>
  {menuOpen ? "✕" : "☰"}
</button>
{menuOpen && (
  <nav className="mobile-nav">
    <Link to="/" onClick={() => setMenuOpen(false)}>
      Home
    </Link>

    <Link to="/properties" onClick={() => setMenuOpen(false)}>
      Properties
    </Link>

    <Link to="/favorites" onClick={() => setMenuOpen(false)}>
      Favorites
    </Link>

    <Link to="/about" onClick={() => setMenuOpen(false)}>
      About
    </Link>

    <Link to="/contact" onClick={() => setMenuOpen(false)}>
      Contact
    </Link>

    <Link
      to="/contact"
      className="mobile-nav-button"
      onClick={() => setMenuOpen(false)}
    >
      Schedule a Viewing
    </Link>
  </nav>
)}

      <Link to="/contact" className="nav-button">
        Schedule a Viewing
      </Link>
    </header>
  );
}

function Home() {   const { toggleFavorite, isFavorite } = useFavorites();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [listing, setListing] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [searchResults, setSearchResults] = useState(properties);

  const handleSearch = () => {
    const results = properties.filter((property) => {
      const locationMatch =
        !location ||
        property.location.toLowerCase().includes(location.toLowerCase());

      const typeMatch =
        !type || property.propertyType === type;

      const listingMatch =
        !listing || property.listing === listing;

      const bedroomMatch =
        !bedrooms || property.beds >= Number(bedrooms);

      return (
        locationMatch &&
        typeMatch &&
        listingMatch &&
        bedroomMatch
      );
    });

    setSearchResults(results);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">HAVENSTONE REALTY</p>

          <h1>
            Find a place
            <br />
            worth coming home to.
          </h1>

          <p className="hero-text">
            Exceptional homes. Prime locations. Trusted guidance.
          </p>

          <div className="hero-actions">
            <Link to="/properties" className="primary-button">
              Explore Properties
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* PROPERTY SEARCH */}
      <section className="property-search">
        <div className="search-heading">
          <p className="section-eyebrow">FIND YOUR PROPERTY</p>

          <h2>What are you looking for?</h2>
        </div>

        <div className="search-box">
          {/* LOCATION */}
          <div className="search-field">
            <label>Location</label>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select location</option>
              <option>Abuja</option>
              <option>Maitama</option>
              <option>Asokoro</option>
              <option>Guzape</option>
              <option>Wuse II</option>
              <option>Jabi</option>
              <option>Katampe</option>
            </select>
          </div>

          {/* PROPERTY TYPE */}
          <div className="search-field">
            <label>Property Type</label>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select type</option>
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Duplex</option>
              <option>Land</option>
            </select>
          </div>

          {/* LISTING */}
          <div className="search-field">
            <label>Listing</label>

            <select
              value={listing}
              onChange={(e) => setListing(e.target.value)}
            >
              <option value="">Buy or rent</option>
              <option>For Sale</option>
              <option>For Rent</option>
            </select>
          </div>

          {/* BEDROOMS */}
          <div className="search-field">
            <label>Bedrooms</label>

            <select
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            >
              <option value="">Bedrooms</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>

          {/* SEARCH BUTTON */}
          <button
            className="search-button"
            onClick={handleSearch}
          >
            Search Properties
          </button>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="featured-section">
        <div className="section-heading">
          <div>
            <p className="section-eyebrow">
              FEATURED PROPERTIES
            </p>

            <h2>Spaces that feel like home.</h2>
          </div>

          <Link to="/properties" className="view-all">
            View all properties →
          </Link>
        </div>

        {searchResults.length > 0 ? (
          <div className="property-grid">
            {searchResults.map((property) => (
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
    className={`favorite-button ${
      isFavorite(property.id) ? "active" : ""
    }`}
    onClick={() => toggleFavorite(property.id)}
    aria-label={
      isFavorite(property.id)
        ? "Remove from favorites"
        : "Add to favorites"
    }
  >
    {isFavorite(property.id) ? "♥" : "♡"}
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
        ) : (
          <div className="no-results">
            <h3>No properties found</h3>

            <p>
              Try changing your search filters to find
              available properties.
            </p>

            <button
              className="search-button"
              onClick={() => {
                setLocation("");
                setType("");
                setListing("");
                setBedrooms("");
                setSearchResults(properties);
              }}
            >
              Clear Search
            </button>
          </div>
        )}
      </section>
    </>
  );
}

function Properties() {
  const { toggleFavorite, isFavorite } = useFavorites();

  const [sortBy, setSortBy] = useState("featured");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [listingFilter, setListingFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
const [publicProperties, setPublicProperties] = useState(() => {
  const savedProperties = localStorage.getItem(
    "havenstone-admin-properties"
  );

  return savedProperties
    ? JSON.parse(savedProperties)
    : properties;
});
  const filteredProperties = publicProperties
  .filter((property) => {
    const search = searchTerm.toLowerCase().trim();

    const matchesSearch =
      search === "" ||
      property.name.toLowerCase().includes(search) ||
      property.location.toLowerCase().includes(search) ||
      property.propertyType.toLowerCase().includes(search);

    const matchesLocation =
      locationFilter === "all" ||
      property.location === locationFilter;

    const matchesType =
      typeFilter === "all" ||
      property.propertyType === typeFilter;

    const matchesListing =
      listingFilter === "all" ||
      property.listing === listingFilter;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesType &&
      matchesListing
    );
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "price-low") {
      return (
        Number(a.price.replace(/[^0-9]/g, "")) -
        Number(b.price.replace(/[^0-9]/g, ""))
      );
    }

    if (sortBy === "price-high") {
      return (
        Number(b.price.replace(/[^0-9]/g, "")) -
        Number(a.price.replace(/[^0-9]/g, ""))
      );
    }

    if (sortBy === "beds") {
      return b.beds - a.beds;
    }

    return a.id - b.id;
  });

  return (
    <main className="properties-page">
      <section className="properties-header">
        <div>
          <p className="section-eyebrow">OUR PROPERTIES</p>

          <h1>Find your next place in Abuja.</h1>

          <p>
            Explore carefully selected homes and investment
            opportunities across Abuja's most desirable locations.
          </p>
        </div>
      </section>

      <section className="properties-listing">
        <div className="properties-toolbar">
          <div>
            <span className="listing-label">
              AVAILABLE PROPERTIES
            </span>

            <h2>
              {sortedProperties.length}{" "}
              {sortedProperties.length === 1
                ? "Property"
                : "Properties"}
            </h2>
          </div>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>

            <option value="price-low">
              Price: Low to High
            </option>

            <option value="price-high">
              Price: High to Low
            </option>

            <option value="beds">
              Most Bedrooms
            </option>
          </select>
        </div>

        <div className="property-search-input">
          <input
            type="text"
            placeholder="Search by property name, location or type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="property-filters">
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            <option value="all">
              All Locations
            </option>

            <option value="Asokoro, Abuja">
              Asokoro
            </option>

            <option value="Maitama, Abuja">
              Maitama
            </option>

            <option value="Guzape, Abuja">
              Guzape
            </option>

            <option value="Jabi, Abuja">
              Jabi
            </option>

            <option value="Katampe, Abuja">
              Katampe
            </option>

            <option value="Wuse II, Abuja">
              Wuse II
            </option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="all">
              All Property Types
            </option>

            <option value="Villa">
              Villa
            </option>

            <option value="House">
              House
            </option>

            <option value="Apartment">
              Apartment
            </option>
          </select>

          <select
            value={listingFilter}
            onChange={(e) => setListingFilter(e.target.value)}
          >
            <option value="all">
              Buy or Rent
            </option>

            <option value="For Sale">
              For Sale
            </option>

            <option value="For Rent">
              For Rent
            </option>
          </select>
        </div>

        {sortedProperties.length > 0 ? (
          <div className="property-grid properties-grid">
            {sortedProperties.map((property) => (
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
                    className={`favorite-button ${
                      isFavorite(property.id)
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      toggleFavorite(property.id)
                    }
                    aria-label={
                      isFavorite(property.id)
                        ? "Remove from favorites"
                        : "Add to favorites"
                    }
                  >
                    {isFavorite(property.id)
                      ? "♥"
                      : "♡"}
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
                    <span>
                      {property.beds} Beds
                    </span>

                    <span>
                      {property.baths} Baths
                    </span>

                    <span>
                      {property.propertyType}
                    </span>
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
        ) : (
          <div className="properties-no-results">
            <p className="section-eyebrow">
              NO MATCHES
            </p>

            <h2>
              No properties found.
            </h2>

            <p>
              Try changing your search or filters
              to find available properties.
            </p>

            <button
              className="clear-filters-button"
              onClick={() => {
                setSearchTerm("");
                setLocationFilter("all");
                setTypeFilter("all");
                setListingFilter("all");
                setSortBy("featured");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
function PropertyDetails() {
  const { id } = useParams();
  const { toggleFavorite, isFavorite } = useFavorites();

  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

 const savedProperties = localStorage.getItem(
  "havenstone-admin-properties"
);

const propertyList = savedProperties
  ? JSON.parse(savedProperties)
  : properties;

const property = propertyList.find(
  (item) => item.id === Number(id)
);

  if (!property) {
    return (
      <main className="page">
        <p className="eyebrow">PROPERTY NOT FOUND</p>

        <h1>We couldn't find that property.</h1>

        <Link to="/properties" className="primary-button">
          Back to Properties
        </Link>
      </main>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: property.name,
      text: `Check out ${property.name} at HavenStone Realty.`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("Property link copied to clipboard.");
      }
    } catch (error) {
      console.log("Share cancelled.");
    }
  };

  const showPreviousImage = (e) => {
    e.stopPropagation();

    setActiveImage((current) =>
      current === 0
        ? (property.gallery?.length || 1) - 1
        : current - 1
    );
  };

  const showNextImage = (e) => {
    e.stopPropagation();

    setActiveImage((current) =>
      current === (property.gallery?.length || 1) - 1
        ? 0
        : current + 1
    );
  };

  return (
    <main className="property-details-page">
      <section className="property-details-hero">
        <button
          className="property-main-image-button"
          onClick={() => setLightboxOpen(true)}
          aria-label="View property image fullscreen"
        >
          <img
            src={property.gallery?.[activeImage] || property.image}
            alt={`${property.name} - Image ${activeImage + 1}`}
          />
        </button>

        <div className="property-details-overlay">
          <span>{property.listing}</span>

          <button
            className={`favorite-button ${
              isFavorite(property.id) ? "active" : ""
            }`}
            onClick={() => toggleFavorite(property.id)}
            aria-label={
              isFavorite(property.id)
                ? "Remove from favorites"
                : "Add to favorites"
            }
          >
            {isFavorite(property.id) ? "♥" : "♡"}
          </button>

          <button
            className="property-share-button"
            onClick={handleShare}
            aria-label="Share property"
          >
            ↗ Share
          </button>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="property-lightbox"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            className="property-lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close image viewer"
          >
            ✕
          </button>

          <button
            className="property-lightbox-prev"
            onClick={showPreviousImage}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            src={property.gallery?.[activeImage] || property.image}
            alt={`${property.name} - Fullscreen image`}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="property-lightbox-next"
            onClick={showNextImage}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="property-lightbox-counter">
            {activeImage + 1} / {property.gallery?.length || 1}
          </div>
        </div>
      )}

      {property.gallery && property.gallery.length > 1 && (
        <div className="property-gallery-thumbnails">
          {property.gallery.map((image, index) => (
            <button
              key={image}
              className={`property-gallery-thumbnail ${
                activeImage === index ? "active" : ""
              }`}
              onClick={() => setActiveImage(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${property.name} thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      )}

      <section className="property-details-content">
        <div className="property-main-info">
          <p className="section-eyebrow">
            {property.location}
          </p>

          <h1>{property.name}</h1>

          <p className="property-details-price">
            {property.price}
          </p>

          <div className="property-stats">
  <div>
    <strong>{property.beds}</strong>
    <span>Bedrooms</span>
  </div>

  <div>
    <strong>{property.baths}</strong>
    <span>Bathrooms</span>
  </div>

  <div>
    <strong>{property.area || "—"}</strong>
    <span>Area</span>
  </div>

  <div>
    <strong>{property.parking || "—"}</strong>
    <span>Parking</span>
  </div>
</div>

          <div className="property-description">
            <h2>About this property</h2>

            <p>
              {property.description ||
                "Experience refined living in one of Abuja's most desirable locations. This exceptional property combines elegant design, generous living spaces and modern comfort."}
            </p>
          </div>

          <div className="property-features">
  <h2>Property Features</h2>

  <div className="features-grid">
    {property.amenities?.map((amenity) => (
      <span key={amenity}>✓ {amenity}</span>
    ))}
  </div>
</div>
        </div>

        <aside className="property-contact-card">
          <p className="contact-label">
            INTERESTED IN THIS PROPERTY?
          </p>

          <h2>Schedule a private viewing.</h2>

          <p>
            Speak with a HavenStone property consultant
            and arrange a convenient viewing.
          </p>

          <Link
            to={`/contact?property=${property.id}`}
            className="property-contact-button"
          >
            Schedule a Viewing
          </Link>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hello HavenStone Realty, I'm interested in ${property.name}. I'd like to schedule a viewing.`
            )}`}
            className="property-whatsapp-button"
            target="_blank"
            rel="noreferrer"
          >
            Contact via WhatsApp
          </a>
        </aside>
      </section>
    </main>
  );
}
function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <p className="section-eyebrow">ABOUT HAVENSTONE</p>

          <h1>
            Real estate built
            <br />
            around trust.
          </h1>

          <p>
            We help people discover exceptional properties
            and make confident real-estate decisions across
            Abuja.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-heading">
          <p className="section-eyebrow">OUR STORY</p>

          <h2>
            More than properties.
            <br />
            We create possibilities.
          </h2>
        </div>

        <div className="about-story-text">
          <p>
            HavenStone Realty is a modern real-estate company
            focused on connecting people with exceptional
            homes and investment opportunities in Abuja.
          </p>

          <p>
            From finding the right neighbourhood to arranging
            private viewings, we make the property journey
            simple, transparent and personal.
          </p>

          <p>
            Our approach combines local market knowledge,
            thoughtful guidance and a commitment to putting
            our clients' needs first.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-heading">
          <p className="section-eyebrow">WHY HAVENSTONE</p>

          <h2>A better way to find your place.</h2>
        </div>

        <div className="values-grid">
          <article className="value-card">
            <span>01</span>

            <h3>Local Expertise</h3>

            <p>
              Deep knowledge of Abuja's neighbourhoods helps
              us connect clients with properties that fit
              their goals.
            </p>
          </article>

          <article className="value-card">
            <span>02</span>

            <h3>Trusted Guidance</h3>

            <p>
              We believe property decisions should be clear,
              informed and built around your priorities.
            </p>
          </article>

          <article className="value-card">
            <span>03</span>

            <h3>Exceptional Homes</h3>

            <p>
              We carefully showcase properties with quality,
              location and long-term value in mind.
            </p>
          </article>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-item">
          <strong>50+</strong>
          <span>Properties Listed</span>
        </div>

        <div className="stat-item">
          <strong>8+</strong>
          <span>Abuja Locations</span>
        </div>

        <div className="stat-item">
          <strong>100%</strong>
          <span>Client Focused</span>
        </div>

        <div className="stat-item">
          <strong>24/7</strong>
          <span>Support</span>
        </div>
      </section>

      <section className="about-cta">
        <p className="section-eyebrow">FIND YOUR NEXT HOME</p>

        <h2>
          Your next chapter
          <br />
          starts here.
        </h2>

        <Link to="/properties" className="primary-button">
          Explore Properties
        </Link>
      </section>
    </main>
  );
}
function Contact() {
  const [searchParams] = useSearchParams();

  const propertyId = searchParams.get("property");

  const selectedProperty = properties.find(
    (property) => property.id === Number(propertyId)
  );

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  property: selectedProperty ? selectedProperty.name : "",
  date: "",
  time: "",
  message: "",
});

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const existingLeads = localStorage.getItem(
    "havenstone-leads"
  );

  const leads = existingLeads
    ? JSON.parse(existingLeads)
    : [];

  const newLead = {
    id: Date.now(),
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    property: formData.property,
    date: formData.date,
    time: formData.time,
    message: formData.message,
    submittedAt: new Date().toISOString(),
  };

  const updatedLeads = [
    ...leads,
    newLead,
  ];

  localStorage.setItem(
    "havenstone-leads",
    JSON.stringify(updatedLeads)
  );

  const whatsappMessage = `
Hello HavenStone Realty,

I'd like to schedule a property viewing.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property: ${formData.property}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Message:
${formData.message || "No additional message."}
`.trim();

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  window.open(whatsappUrl, "_blank");

  setSubmitted(true);
};

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div>
          <p className="section-eyebrow">GET IN TOUCH</p>

          <h1>
            Let's find your
            <br />
            next property.
          </h1>

          <p>
            Whether you're buying, renting or simply exploring
            your options, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-intro">
          <p className="section-eyebrow">SCHEDULE A VIEWING</p>

          <h2>
            Tell us what you're
            <br />
            looking for.
          </h2>

          <p>
            Complete the form and a HavenStone property
            consultant will get back to you to arrange a
            convenient viewing.
          </p>

          <div className="contact-details">
            <div>
              <span>PHONE</span>
              <strong>+234 800 000 0000</strong>
            </div>

            <div>
              <span>EMAIL</span>
              <strong>hello@havenstonerealty.com</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>Abuja, Nigeria</strong>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="form-success">
              <span className="success-icon">✓</span>

              <h2>Request received.</h2>

              <p>
                Thank you for contacting HavenStone Realty.
                A property consultant will be in touch with
                you shortly.
              </p>

              <button
                className="primary-button"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="name">Full Name</label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="phone">Phone Number</label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="property">
                    Preferred Property
                  </label>

                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a property
                    </option>

                    {properties.map((property) => (
                      <option
                        key={property.id}
                        value={property.name}
                      >
                        {property.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="date">
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="time">
                    Preferred Time
                  </label>

                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a time</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="message">
                  Message <span>(Optional)</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us anything else you'd like us to know..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="form-submit"
              >
                Request a Viewing →
              </button>

              <p className="form-note">
                By submitting this form, you agree to be
                contacted by a HavenStone property consultant.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
function AdminDashboard() {
  const [adminProperties] = useState(() => {
    const savedProperties = localStorage.getItem(
      "havenstone-admin-properties"
    );

    return savedProperties
      ? JSON.parse(savedProperties)
      : properties;
  });

  const [leads] = useState(() => {
    const savedLeads = localStorage.getItem(
      "havenstone-leads"
    );

    return savedLeads
      ? JSON.parse(savedLeads)
      : [];
  });

  const totalProperties = adminProperties.length;

  const propertiesForSale = adminProperties.filter(
    (property) => property.listing === "For Sale"
  ).length;

  const propertiesForRent = adminProperties.filter(
    (property) => property.listing === "For Rent"
  ).length;

  const viewingRequests = leads.length;

  return (
    <main className="admin-page">
      <section className="admin-header">
        <p className="section-eyebrow">HAVENSTONE REALTY</p>

        <h1>Admin Dashboard</h1>

        <p>
          Manage properties, enquiries and viewing requests
          from one place.
        </p>
      </section>

      <section className="admin-stats">
        <div className="admin-stat-card">
          <span>Total Properties</span>
          <strong>{totalProperties}</strong>
        </div>

        <div className="admin-stat-card">
          <span>For Sale</span>
          <strong>{propertiesForSale}</strong>
        </div>

        <div className="admin-stat-card">
          <span>For Rent</span>
          <strong>{propertiesForRent}</strong>
        </div>

        <div className="admin-stat-card">
          <span>Viewing Requests</span>
          <strong>{viewingRequests}</strong>
        </div>
      </section>

      <section className="admin-content-grid">
        <div className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <p className="section-eyebrow">PROPERTIES</p>

              <h2>Property Management</h2>
            </div>

            <Link
              to="/admin/properties"
              className="admin-panel-button"
            >
              Manage Properties
            </Link>
          </div>

          <p>
            Add, edit and manage the properties displayed
            on the HavenStone website.
          </p>
        </div>

        <div className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <p className="section-eyebrow">LEADS</p>

              <h2>Viewing Requests</h2>
            </div>

            <Link
              to="/admin/leads"
              className="admin-panel-button"
            >
              View Leads
            </Link>
          </div>

          <p>
            Review enquiries and property viewing requests
            from potential clients.
          </p>
        </div>
      </section>
    </main>
  );
}
function AdminProperties() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingPropertyId, setEditingPropertyId] = useState(null);

  const [adminProperties, setAdminProperties] = useState(() => {
    const savedProperties = localStorage.getItem(
      "havenstone-admin-properties"
    );

    return savedProperties
      ? JSON.parse(savedProperties)
      : properties;
  });

  const emptyForm = {
    name: "",
    location: "",
    price: "",
    listing: "",
    propertyType: "",
    beds: "",
    baths: "",
    area: "",
    parking: "",
    description: "",
    amenities: "",
    image: "",
    gallery: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(emptyForm);
    setEditingPropertyId(null);
    setShowAddForm(false);
  };

  const handleAddProperty = () => {
    setEditingPropertyId(null);
    setFormData(emptyForm);
    setShowAddForm(true);
  };

  const handleEditProperty = (property) => {
    setEditingPropertyId(property.id);

    setFormData({
      name: property.name || "",
      location: property.location || "",
      price: property.price || "",
      listing: property.listing || "",
      propertyType: property.propertyType || "",
      beds: property.beds ?? "",
      baths: property.baths ?? "",
      area: property.area || "",
      parking: property.parking || "",
      description: property.description || "",
      amenities: property.amenities?.join(", ") || "",
      image: property.image || "",
      gallery: property.gallery?.join(", ") || "",
    });

    setShowAddForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSaveProperty = () => {
    if (
      !formData.name ||
      !formData.location ||
      !formData.price ||
      !formData.listing ||
      !formData.propertyType
    ) {
      alert("Please complete the required property fields.");
      return;
    }

    const updatedPropertyData = {
      name: formData.name,
      location: formData.location,
      price: formData.price,
      listing: formData.listing,
      propertyType: formData.propertyType,

      beds: Number(formData.beds) || 0,
      baths: Number(formData.baths) || 0,

      area: formData.area,
      parking: formData.parking,

      description: formData.description,

      amenities: formData.amenities
        .split(",")
        .map((amenity) => amenity.trim())
        .filter(Boolean),

      image:
        formData.image ||
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",

      gallery: formData.gallery
        ? formData.gallery
            .split(",")
            .map((image) => image.trim())
            .filter(Boolean)
        : [
            formData.image ||
              "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
          ],
    };

    let updatedProperties;

    if (editingPropertyId !== null) {
      updatedProperties = adminProperties.map((property) =>
        property.id === editingPropertyId
          ? {
              ...property,
              ...updatedPropertyData,
            }
          : property
      );

      alert("Property updated successfully.");
    } else {
      const highestId =
        adminProperties.length > 0
          ? Math.max(
              ...adminProperties.map((property) =>
                Number(property.id)
              )
            )
          : 0;

      const newProperty = {
        id: highestId + 1,
        ...updatedPropertyData,
      };

      updatedProperties = [
        ...adminProperties,
        newProperty,
      ];

      alert("Property added successfully.");
    }

    setAdminProperties(updatedProperties);

    localStorage.setItem(
      "havenstone-admin-properties",
      JSON.stringify(updatedProperties)
    );

    resetForm();
  };

  const handleDeleteProperty = (propertyId) => {
    const property = adminProperties.find(
      (item) => item.id === propertyId
    );

    if (!property) {
      return;
    }

    const confirmed = window.confirm(
      `Are you sure you want to delete "${property.name}"?`
    );

    if (!confirmed) {
      return;
    }

    const updatedProperties = adminProperties.filter(
      (item) => item.id !== propertyId
    );

    setAdminProperties(updatedProperties);

    localStorage.setItem(
      "havenstone-admin-properties",
      JSON.stringify(updatedProperties)
    );

    if (editingPropertyId === propertyId) {
      resetForm();
    }

    alert("Property deleted successfully.");
  };

  return (
    <main className="admin-page">
      <section className="admin-header">
        <p className="section-eyebrow">HAVENSTONE REALTY</p>

        <h1>Property Management</h1>

        <p>
          View and manage all properties listed on the HavenStone
          website.
        </p>
      </section>

      <section className="admin-properties-section">
        <div className="admin-properties-toolbar">
          <div>
            <span className="admin-listing-label">
              PROPERTY INVENTORY
            </span>

            <h2>{adminProperties.length} Properties</h2>
          </div>

          <button
            className="admin-add-button"
            onClick={handleAddProperty}
          >
            + Add Property
          </button>
        </div>

        {showAddForm && (
          <div className="admin-property-form">
            <div className="admin-form-header">
              <div>
                <p className="section-eyebrow">
                  {editingPropertyId !== null
                    ? "EDIT LISTING"
                    : "NEW LISTING"}
                </p>

                <h2>
                  {editingPropertyId !== null
                    ? "Edit Property"
                    : "Add Property"}
                </h2>
              </div>
            </div>

            <div className="admin-form-grid">
              <div className="admin-form-field">
                <label htmlFor="property-name">
                  Property Name
                </label>

                <input
                  id="property-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Aso Residence"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-location">
                  Location
                </label>

                <input
                  id="property-location"
                  name="location"
                  type="text"
                  placeholder="e.g. Asokoro, Abuja"
                  value={formData.location}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-price">
                  Price
                </label>

                <input
                  id="property-price"
                  name="price"
                  type="text"
                  placeholder="e.g. ₦650m"
                  value={formData.price}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-listing">
                  Listing Type
                </label>

                <select
                  id="property-listing"
                  name="listing"
                  value={formData.listing}
                  onChange={handleFormChange}
                >
                  <option value="">
                    Select listing type
                  </option>

                  <option value="For Sale">
                    For Sale
                  </option>

                  <option value="For Rent">
                    For Rent
                  </option>
                </select>
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-type">
                  Property Type
                </label>

                <select
                  id="property-type"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleFormChange}
                >
                  <option value="">
                    Select property type
                  </option>

                  <option value="Villa">
                    Villa
                  </option>

                  <option value="House">
                    House
                  </option>

                  <option value="Apartment">
                    Apartment
                  </option>
                </select>
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-beds">
                  Bedrooms
                </label>

                <input
                  id="property-beds"
                  name="beds"
                  type="number"
                  min="0"
                  placeholder="e.g. 4"
                  value={formData.beds}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-baths">
                  Bathrooms
                </label>

                <input
                  id="property-baths"
                  name="baths"
                  type="number"
                  min="0"
                  placeholder="e.g. 4"
                  value={formData.baths}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-area">
                  Area
                </label>

                <input
                  id="property-area"
                  name="area"
                  type="text"
                  placeholder="e.g. 850 sqm"
                  value={formData.area}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field">
                <label htmlFor="property-parking">
                  Parking
                </label>

                <input
                  id="property-parking"
                  name="parking"
                  type="text"
                  placeholder="e.g. 2-Car Garage"
                  value={formData.parking}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field admin-form-full">
                <label htmlFor="property-description">
                  Description
                </label>

                <textarea
                  id="property-description"
                  name="description"
                  rows="5"
                  placeholder="Describe the property..."
                  value={formData.description}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field admin-form-full">
                <label htmlFor="property-amenities">
                  Amenities
                </label>

                <input
                  id="property-amenities"
                  name="amenities"
                  type="text"
                  placeholder="Swimming Pool, Fitted Kitchen, 24/7 Security"
                  value={formData.amenities}
                  onChange={handleFormChange}
                />

                <small>
                  Separate each amenity with a comma.
                </small>
              </div>

              <div className="admin-form-field admin-form-full">
                <label htmlFor="property-image">
                  Main Image URL
                </label>

                <input
                  id="property-image"
                  name="image"
                  type="url"
                  placeholder="https://..."
                  value={formData.image}
                  onChange={handleFormChange}
                />
              </div>

              <div className="admin-form-field admin-form-full">
                <label htmlFor="property-gallery">
                  Gallery Image URLs
                </label>

                <textarea
                  id="property-gallery"
                  name="gallery"
                  rows="4"
                  placeholder="Paste image URLs separated by commas"
                  value={formData.gallery}
                  onChange={handleFormChange}
                />

                <small>
                  Add multiple image URLs separated by commas.
                </small>
              </div>
            </div>

            <div className="admin-form-actions">
              <button
                type="button"
                className="admin-form-cancel"
                onClick={resetForm}
              >
                Cancel
              </button>

              <button
                type="button"
                className="admin-form-submit"
                onClick={handleSaveProperty}
              >
                {editingPropertyId !== null
                  ? "Update Property"
                  : "Save Property"}
              </button>
            </div>
          </div>
        )}

        <div className="admin-properties-list">
          {adminProperties.map((property) => (
            <article
              className="admin-property-card"
              key={property.id}
            >
              <div className="admin-property-image">
                <img
                  src={property.image}
                  alt={property.name}
                />
              </div>

              <div className="admin-property-info">
                <span className="admin-property-listing">
                  {property.listing}
                </span>

                <h3>{property.name}</h3>

                <p className="admin-property-location">
                  {property.location}
                </p>

                <p className="admin-property-price">
                  {property.price}
                </p>

                <div className="admin-property-details">
                  <span>{property.beds} Beds</span>
                  <span>{property.baths} Baths</span>
                  <span>{property.propertyType}</span>
                </div>
              </div>

              <div className="admin-property-actions">
                <button
                  type="button"
                  onClick={() => handleEditProperty(property)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    handleDeleteProperty(property.id)
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
function AdminLeads() {
  const [leads, setLeads] = useState(() => {
    const savedLeads = localStorage.getItem(
      "havenstone-leads"
    );

    return savedLeads
      ? JSON.parse(savedLeads)
      : [];
  });

  const handleDeleteLead = (leadId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this viewing request?"
    );

    if (!confirmed) {
      return;
    }

    const updatedLeads = leads.filter(
      (lead) => lead.id !== leadId
    );

    setLeads(updatedLeads);

    localStorage.setItem(
      "havenstone-leads",
      JSON.stringify(updatedLeads)
    );
  };

  return (
    <main className="admin-page">
      <section className="admin-header">
        <p className="section-eyebrow">HAVENSTONE REALTY</p>

        <h1>Viewing Requests</h1>

        <p>
          Review property enquiries and viewing requests from
          potential clients.
        </p>
      </section>

      {leads.length === 0 ? (
        <div className="admin-leads-empty">
          <h2>No Viewing Requests</h2>

          <p>
            New property enquiries and viewing requests will
            appear here.
          </p>
        </div>
      ) : (
        <section className="admin-leads-list">
          {leads.map((lead) => (
            <article
              className="admin-lead-card"
              key={lead.id}
            >
              <div className="admin-lead-main">
                <span className="admin-lead-label">
                  VIEWING REQUEST
                </span>

                <h3>{lead.name}</h3>

                <p className="admin-lead-property">
                  {lead.property}
                </p>

                <div className="admin-lead-details">
                  <div className="admin-lead-detail">
                    <span>Email</span>
                    <strong>{lead.email}</strong>
                  </div>

                  <div className="admin-lead-detail">
                    <span>Phone</span>
                    <strong>{lead.phone}</strong>
                  </div>

                  <div className="admin-lead-detail">
                    <span>Preferred Date</span>
                    <strong>{lead.date}</strong>
                  </div>

                  <div className="admin-lead-detail">
                    <span>Preferred Time</span>
                    <strong>{lead.time}</strong>
                  </div>
                </div>

                <div className="admin-lead-message">
                  <span>Message</span>

                  <p>
                    {lead.message ||
                      "No additional message."}
                  </p>
                </div>
              </div>

              <div className="admin-lead-actions">
                <button
                  type="button"
                  className="admin-lead-delete"
                  onClick={() => handleDeleteLead(lead.id)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/properties"
            element={<Properties />}
          />

          <Route
            path="/properties/:id"
            element={<PropertyDetails />}
          />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route
  path="/admin/properties"
  element={<AdminProperties />}
/>
<Route
  path="/admin/leads"
  element={<AdminLeads />}
/>
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;