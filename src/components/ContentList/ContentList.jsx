import React from 'react';
import ContentListItem from '../ContentListItem/ContentlistItem.jsx';

const ContentList = ({ campers, onRemoveFavourite }) => {
  return (
    <div>
      <ul>
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
