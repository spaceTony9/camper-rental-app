import AddFavouriteBtn from '../AddFavouriteBtn/AddFavouriteBtn.jsx';

const ContentListItem = ({ camperData, onRemove }) => {
  const {
    name,
    rating,
    location,
    description,
    price,
    details,
    gallery,
    adults,
  } = camperData;

  const shortDescription = description.split(/([.!?])\s/)[0] + '.';

  return (
    <div>
      <img src={gallery[0]} alt={`${name} gallery image`} />
      <div>
        <div>
          <h3>{name}</h3>
          <p>{price}</p>
          <AddFavouriteBtn onRemove={onRemove} data={camperData} />
        </div>
        <div>
          <p>{rating}</p>
          <p>{location}</p>
        </div>
        <p>{shortDescription}</p>
        <div>
          <p>Adults: {adults}</p>
          <p>Beds: {details.beds}</p>
        </div>
        <button>Show More</button>
      </div>
    </div>
  );
};

export default ContentListItem;
