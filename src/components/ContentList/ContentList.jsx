import React from 'react';
import ContentListItem from '../ContentListItem/ContentlistItem.jsx';
import css from './Contentlist.module.css';

const ContentList = ({ campers, onRemoveFavourite }) => {
  return (
    <div className={css.listContainer}>
      <ul className={css.list}>
        {campers?.map(item => (
          <li key={item._id}>
            <ContentListItem camperData={item} onRemove={onRemoveFavourite} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentList;
