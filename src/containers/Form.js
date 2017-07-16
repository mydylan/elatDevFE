import { connect } from 'react-redux';
import { createContact, updateContact } from '../middlewares/middlewares';
import FormPopup from '../components/FormPopup/FormPopup';
import { contactByIdSelector, isActiveSelector } from '../selectors/selectors';

const mapDispatchToProps = {
  createContact, updateContact
};

const mapStateToProps = (state) => {
  return {
    contact: contactByIdSelector(state),
    isActive: isActiveSelector(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPopup);
