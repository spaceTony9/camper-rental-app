import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux/campers/operations.js';
import ContentList from '../../components/ContentList/ContentList.jsx';
import { campers } from '../../redux/campers/slice.js';
import Filter from '../../components/Filter/Filter.jsx';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const selectCampers = useSelector(campers);
  const [visibleItems, setVisibleItems] = useState(4);
  const [filterSettings, setFilterSettings] = useState({
    location: '',
    equipment: [],
    type: '',
  });

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 4);
  };

  const handleFilterSubmit = values => {
    setFilterSettings(values);
  };

  const filteredCampers = selectCampers.filter(camper => {
    const matchesLocation = filterSettings.location
      ? camper.location
          .toLowerCase()
          .includes(filterSettings.location.toLowerCase())
      : true;

    const matchesEquipment = filterSettings.equipment.length
      ? filterSettings.equipment.every(eq => {
          switch (eq) {
            case 'AC':
              return camper.details.airConditioner > 0;
            case 'automatic':
              return camper.transmission === 'automatic';
            case 'kitchen':
              return camper.details.kitchen > 0;
            case 'TV':
              return camper.details.TV > 0;
            case 'shower/WC':
              return camper.details.shower > 0 && camper.details.toilet > 0;
            default:
              return false;
          }
        })
      : true;

    const matchesType = filterSettings.type
      ? camper.form === filterSettings.type
      : true;

    return matchesLocation && matchesEquipment && matchesType;
  });

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Filter onSubmit={handleFilterSubmit} />
        <ContentList campers={filteredCampers.slice(0, visibleItems)} />
      </div>
      {visibleItems < filteredCampers.length && (
        <button className={css.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
