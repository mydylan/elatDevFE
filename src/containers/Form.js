import { connect } from 'react-redux';
import { createContact, updateContact, hideForm } from '../middlewares/middlewares';
import FormPopup from '../components/FormPopup/FormPopup';
import { contactByIdSelector, isActiveSelector, idSelector } from '../selectors/selectors';

const mapDispatchToProps = {
  createContact, updateContact, hideForm
};

const mapStateToProps = (state) => {
  return {
    contact: contactByIdSelector(state),
    selectedId: idSelector(state),
    isActive: isActiveSelector(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormPopup);
