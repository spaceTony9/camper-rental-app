const AddFavouriteBtn = ({ data, onRemove }) => {
  const handleBtnClick = () => {
    const existingFavourites =
      JSON.parse(localStorage.getItem('favourites')) || [];
    const updatedFavourites = [...existingFavourites, data];
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    updatedFavourites.forEach(item => {
      if (item._id === data._id) {
        onRemove(data._id);
      }
    });
  };

  return <button onClick={handleBtnClick}>love it</button>;
};

export default AddFavouriteBtn;
