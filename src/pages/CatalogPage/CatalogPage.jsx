import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux/campers/operations.js';
import ContentList from '../../components/ContentList/ContentList.jsx';
import { campers } from '../../redux/campers/slice.js';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const selectCampers = useSelector(campers);
  const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4); // Show 4 more items
  };

  return (
    <>
      <ContentList campers={selectCampers.slice(0, visibleItems)} />
      {visibleItems < selectCampers.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </>
  );
};

export default CatalogPage;
