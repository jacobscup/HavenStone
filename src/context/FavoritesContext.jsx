import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem(
      "havenstone-favorites"
    );

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "havenstone-favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const toggleFavorite = (propertyId) => {
    setFavorites((currentFavorites) => {
      if (currentFavorites.includes(propertyId)) {
        return currentFavorites.filter(
          (id) => id !== propertyId
        );
      }

      return [...currentFavorites, propertyId];
    });
  };

  const isFavorite = (propertyId) => {
    return favorites.includes(propertyId);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}