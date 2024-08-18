import React, { useState } from 'react';
import Features from '../Features/Features.jsx';
import Reviews from '../Reviews/Reviews.jsx';
import BookingForm from '../BookingForm/BookingForm.jsx';
import css from './ModalContent.module.css';
import { IoCloseSharp, IoLocationOutline } from 'react-icons/io5';
import { CiStar } from 'react-icons/ci';

const ModalContent = ({ camperData, closeModal }) => {
  const {
    name,
    rating,
    location,
    description,
    price,
    gallery,
    adults,
    reviews,
  } = camperData;

  const [activeTab, setActiveTab] = useState('Features');

  const handleTabBtnClick = value => {
    setActiveTab(value);
  };

  return (
    <div className={css.modalContent}>
      <button className={css.closeButton} onClick={closeModal}>
        <IoCloseSharp />
      </button>
      <h3 className={css.name}>{name}</h3>
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
      <p className={css.price}>€{price}.00</p>
      <ul className={css.gallery}>
        {gallery.map((item, index) => (
          <li key={index}>
            <img
              className={css.galleryItem}
              src={item}
              alt={`Gallery item ${index}`}
            />
          </li>
        ))}
      </ul>
      <p className={css.desc}>{description}</p>
      <div>
        <button
          className={`${css.tabButton} ${activeTab === 'Features' ? css.active : ''}`}
          onClick={() => handleTabBtnClick('Features')}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${activeTab === 'Reviews' ? css.active : ''}`}
          onClick={() => handleTabBtnClick('Reviews')}
        >
          Reviews
        </button>
      </div>
      <div className={css.commentsWrapper}>
        {activeTab === 'Features' ? (
          <Features camperData={camperData} adults={adults} />
        ) : (
          <Reviews reviews={reviews} />
        )}
        <BookingForm />
      </div>
    </div>
  );
};

export default ModalContent;
