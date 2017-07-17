import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';

const renderField = (field) => {
  return <Input input={field.input} label={field.label} error={field.meta} />;
};

const renderTextarea = (field) => {
  return <Textarea input={field.input} label={field.label} error={field.meta} />;
};

const validate = (formProps) => {
  const errors = {};
  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }
  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }
  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }
  if (!formProps.phoneNumber) {
    errors.phoneNumber = 'Please enter a phone number';
  }
  return errors;
};

class ContactForm extends React.Component {

  static propTypes = {
    handleSubmit: PropTypes.func,
    initialize: PropTypes.func,
    contact: PropTypes.objectOf(PropTypes.any)
  }

  componentDidMount() {
    if (this.props.contact) {
      const { firstName, lastName, phoneNumber, email } = this.props.contact;
      this.props.initialize({
        firstName, lastName, phoneNumber, email
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <Field name="firstName" component={renderField} type="text" label="First Name" />
          <Field name="lastName" component={renderField} type="text" label="Last Name" />
          <Field name="phoneNumber" component={renderField} type="text" label="Phone Number" />
          <Field name="email" component={renderField} type="email" label="Email" />
          <Field name="history" component={renderTextarea} type="text" label="History of calls" />
          <button type="submit" className="btn btn-primary btn-sm">Submit</button>
        </form>
      </div>
    );
  }
}

const Contact = reduxForm({ form: 'contact', validate })(ContactForm);

export default Contact;
