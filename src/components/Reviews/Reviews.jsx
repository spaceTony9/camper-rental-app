import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  const renderStars = rating => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? css.filledStar : css.emptyStar}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className={css.container}>
      {reviews.map((item, index) => (
        <div key={index}>
          <div className={css.wrapper}>
            <p className={css.nameIcon}>{item.reviewer_name[0]}</p>
            <div>
              <h3 className={css.name}>{item.reviewer_name}</h3>
              <div className={css.rating}>
                {renderStars(item.reviewer_rating)}
              </div>
            </div>
          </div>
          <p className={css.comment}>{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
