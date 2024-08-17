import React, { useState, useEffect } from 'react';
import ContentList from '../../components/ContentList/ContentList.jsx';

const FavoritesPage = () => {
  const [favourites, setFavourites] = useState(() => {
    return JSON.parse(localStorage.getItem('favourites')) || [];
  });

  useEffect(() => {
    const storedFavourites =
      JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const handleRemoveFavourite = id => {
    const updatedFavourites = favourites.filter(item => item._id !== id);
    console.log(updatedFavourites);
    setFavourites(updatedFavourites);

    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <ContentList
      campers={favourites}
      onRemoveFavourite={handleRemoveFavourite}
    />
  );
};

export default FavoritesPage;
