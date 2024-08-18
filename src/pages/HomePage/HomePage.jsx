import css from './HomePage.module.css';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.text}>
          Adventure Awaits: Book Your Perfect Camper Van Today!
        </h1>
        <img
          className={css.img}
          src="https://www.motortrend.com/uploads/2022/01/Winnebago-Industries-e-RV-electric-motorhome-camper-van-Rolling_2.jpg"
          alt="driving van"
        />
      </div>
      <NavLink className={css.navLink} to="/catalog">
        Find my Camper
      </NavLink>
    </div>
  );
};

export default HomePage;
