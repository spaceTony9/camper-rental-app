import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FiWind } from 'react-icons/fi';
import css from './Filter.module.css';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';
import { FaTv } from 'react-icons/fa6';
import { LuShowerHead } from 'react-icons/lu';
import { PiVan } from 'react-icons/pi';
import { FaCaravan } from 'react-icons/fa';
import { GiSurferVan } from 'react-icons/gi';

const FilterSchema = Yup.object().shape({
  location: Yup.string(),
  equipment: Yup.array().of(Yup.string()),
  type: Yup.string(),
});

const Filter = ({ onSubmit }) => (
  <Formik
    initialValues={{
      location: '',
      equipment: [],
      type: '',
    }}
    validationSchema={FilterSchema}
    onSubmit={values => {
      onSubmit(values);
    }}
  >
    {({ values, setFieldValue }) => (
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor="location">
            Location
          </label>
          <Field
            className={css.location}
            id="location"
            name="location"
            placeholder="Enter location"
          />
          <ErrorMessage name="location" component="div" />
        </div>

        <div className={css.wrapper}>
          <h2 className={css.filtersText}>Filters</h2>
          <p className={css.filterLabel}>Vehicle equipment</p>
          <div className={css.wrapperFilter}>
            {['AC', 'transmission', 'kitchen', 'TV', 'shower/WC'].map(eq => (
              <div
                key={eq}
                className={`${css.filterBlock} ${
                  values.equipment.includes(eq) ? css.checked : ''
                }`}
                onClick={() => {
                  const newEquipment = values.equipment.includes(eq)
                    ? values.equipment.filter(e => e !== eq)
                    : [...values.equipment, eq];
                  setFieldValue('equipment', newEquipment);
                }}
              >
                {eq === 'AC' && <FiWind />}
                {eq === 'transmission' && <TbAutomaticGearbox />}
                {eq === 'kitchen' && <TbToolsKitchen2 />}
                {eq === 'TV' && <FaTv />}
                {eq === 'shower/WC' && <LuShowerHead />}
                <span className={css.span}>{eq}</span>
              </div>
            ))}
            <ErrorMessage name="equipment" component="div" />
          </div>
        </div>

        <div className={css.wrapper}>
          <p className={css.filterLabel}>Type</p>
          <div className={css.wrapperFilter}>
            {['van', 'fully integrated', 'alcove'].map(type => (
              <label
                key={type}
                className={`${css.filterBlock} ${
                  values.type === type ? css.checked : ''
                }`}
              >
                <Field
                  type="radio"
                  name="type"
                  value={type}
                  className={css.hiddenRadio}
                />
                {type === 'van' && <PiVan />}
                {type === 'fully integrated' && <FaCaravan />}
                {type === 'alcove' && <GiSurferVan />}
                <span className={css.span}>{type.replace('_', ' ')}</span>
              </label>
            ))}
            <ErrorMessage name="type" component="div" />
          </div>
        </div>

        <button className={css.btn} type="submit">
          Search
        </button>
      </Form>
    )}
  </Formik>
);

export default Filter;
