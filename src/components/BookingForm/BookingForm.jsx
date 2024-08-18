import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './BookingForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name is too short! Minimum 3 characters.')
    .max(50, 'Name is too long! Maximum 50 characters.')
    .required('Name is required'),
  email: Yup.string()
    .min(3, 'Email is too short! Minimum 3 characters.')
    .max(50, 'Email is too long! Maximum 50 characters.')
    .email('Invalid email format')
    .required('Email is required'),
  bookingDate: Yup.date().required('Booking date is required').nullable(),
  comment: Yup.string()
    .min(3, 'Comment is too short! Minimum 3 characters.')
    .max(50, 'Comment is too long! Maximum 50 characters.')
    .optional(),
});

const BookingForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        bookingDate: new Date().toISOString().split('T')[0],
        comment: '',
      }}
      validationSchema={FeedbackSchema}
      onSubmit={values => {
        console.log('Form Submitted', values);
        window.location.reload();
      }}
    >
      {({ handleSubmit }) => (
        <Form className={css.form} onSubmit={handleSubmit}>
          <h2 className={css.header}>Book your campervan now</h2>
          <p className={css.desc}>
            Stay connected! We are always ready to help you.
          </p>
          <div>
            <Field
              className={css.input}
              id="name"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <Field
              className={css.input}
              id="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <Field
              className={css.input}
              id="bookingDate"
              name="bookingDate"
              type="date"
            />
            <ErrorMessage name="bookingDate" component="div" />
          </div>

          <div>
            <Field
              className={`${css.input} ${css.inputComment}`}
              id="comment"
              name="comment"
              placeholder="Your comment"
            />
            <ErrorMessage name="comment" component="div" />
          </div>

          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
