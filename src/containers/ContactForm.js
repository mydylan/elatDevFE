import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <Field name="phoneNumber" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <div>
        <label htmlFor="history">History of calls</label>
        <Field name="history" component="textarea" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func
};

const Contact = reduxForm({ form: 'contact' })(ContactForm);

export default Contact;
