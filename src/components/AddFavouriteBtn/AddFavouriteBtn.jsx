import React, { useState, useEffect } from 'react';
import { CiHeart } from 'react-icons/ci';
import css from './AddFavouriteBtn.module.css';

const AddFavouriteBtn = ({ data, onRemove = () => {} }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const existingFavourites =
      JSON.parse(localStorage.getItem('favourites')) || [];
    const isCurrentlyFavourite = existingFavourites.some(
      item => item._id === data._id
    );
    setIsFavourite(isCurrentlyFavourite);
  }, [data._id]);

  const handleBtnClick = () => {
    const existingFavourites =
      JSON.parse(localStorage.getItem('favourites')) || [];

    const isCurrentlyFavourite = existingFavourites.some(
      item => item._id === data._id
    );

    let updatedFavourites;
    if (isCurrentlyFavourite) {
      updatedFavourites = existingFavourites.filter(
        item => item._id !== data._id
      );
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      onRemove(data._id);
      setIsFavourite(false);
    } else {
      updatedFavourites = [...existingFavourites, data];
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
      setIsFavourite(true);
    }
  };

  return (
    <button className={css.btn} onClick={handleBtnClick}>
      <CiHeart
        style={{
          width: '24px',
          height: '24px',
          fill: isFavourite ? '#E44848' : '#000000',
        }}
      />
    </button>
  );
};

export default AddFavouriteBtn;
