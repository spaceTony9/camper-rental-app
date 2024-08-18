import React from 'react';
import { iconMapping } from '../../utils/iconMapping.jsx';
import css from './Features.module.css';

const Features = ({ camperData, adults }) => {
  const {
    consumption,
    engine,
    form,
    height,
    length,
    tank,
    transmission,
    width,
    details,
  } = camperData;

  const iconEntries = Object.entries(iconMapping);
  const lastIcon = iconEntries[iconEntries.length - 1];

  return (
    <div>
      <ul className={css.list}>
        {lastIcon && (
          <li className={css.listItem} key="last-icon">
            {lastIcon[1]}
            <span>{adults > 1 && ` ${adults} Adults`}</span>
          </li>
        )}
        {Object.entries(details).map(([key, value]) => (
          <li className={css.listItem} key={key}>
            {iconMapping[key]}
            <span>
              {value > 1
                ? ` ${value} ${key.charAt(0).toUpperCase() + key.slice(1)}`
                : ` ${key.charAt(0).toUpperCase() + key.slice(1)}`}
            </span>
          </li>
        ))}
      </ul>
      <p className={css.text}>Vehicle details</p>
      <ul className={css.detailsList}>
        <li>
          Form<span>{form}</span>
        </li>
        <li>
          Length<span>{length}</span>
        </li>
        <li>
          Width<span>{width}</span>
        </li>
        <li>
          Height<span>{height}</span>
        </li>
        <li>
          Tank<span>{tank}</span>
        </li>
        <li>
          Consumption<span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default Features;
