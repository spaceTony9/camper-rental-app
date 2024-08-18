import React, { useState, useEffect } from 'react';
import AddFavouriteBtn from '../AddFavouriteBtn/AddFavouriteBtn.jsx';
import Modal from 'react-modal';
import ModalContent from '../ModalContent/ModalContent.jsx';
import { iconMapping } from '../../utils/iconMapping.jsx';
import { CiStar } from 'react-icons/ci';
import css from './ContentListItem.module.css';
import reviews from '../Reviews/Reviews.jsx';
import { IoLocationOutline } from 'react-icons/io5';

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
    engine,
    transmission,
  } = camperData;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const shortDescription = description.split(/([.!?])\s/)[0] + '.';

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const orderedKeys = [
    { key: 'adults', value: adults },
    { key: 'transmission', value: transmission },
    { key: 'petrol', value: engine },
    { key: 'kitchen', value: details.kitchen },
    { key: 'beds', value: details.beds },
    { key: 'airConditioner', value: details.airConditioner },
  ];

  return (
    <div className={css.container}>
      <img
        className={css.photo}
        src={gallery[0]}
        alt={`${name} gallery image`}
      />
      <div>
        <div className={css.header}>
          <h3 className={css.name}>{name}</h3>
          <div className={css.moneyBtnContainer}>
            <p className={css.price}>€{price}.00</p>
            <AddFavouriteBtn onRemove={onRemove} data={camperData} />
          </div>
        </div>
        <div className={css.rating}>
          <p className={css.ratingText}>
            <CiStar className={css.ratingIcon} />
            {rating} ({reviews.length} Reviews)
          </p>
          <p className={css.ratingText}>
            <IoLocationOutline />
            {location}
          </p>
        </div>
        <p className={css.desc}>{shortDescription}</p>
        <ul className={css.list}>
          {orderedKeys.map(({ key, value }) => {
            if (value) {
              if (
                key === 'transmission' ||
                key === 'engine' ||
                key === 'petrol'
              ) {
                return (
                  <li className={css.listItem} key={key}>
                    {iconMapping[key]} {value}
                  </li>
                );
              }
              return (
                <li className={css.listItem} key={key}>
                  {iconMapping[key]} {value > 1 ? ` ${value}` : ' '}
                  {'  '}
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </li>
              );
            }
            return null;
          })}
        </ul>
        <button className={css.button} onClick={openModal}>
          Show More
        </button>
      </div>
      <Modal
        onRequestClose={closeModal}
        isOpen={isModalOpen}
        style={{
          overlay: {
            backgroundColor: '#11121366',
            zIndex: 1000,
          },
          content: {
            maxHeight: '720px',
            maxWidth: '1000px',
            margin: 'auto',
            padding: '20px',
            borderRadius: '8px',
            background: 'white',
            overflowY: 'auto',
          },
        }}
      >
        <ModalContent camperData={camperData} closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default ContentListItem;
