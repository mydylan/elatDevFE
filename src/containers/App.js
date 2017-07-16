import { connect } from 'react-redux';
import { getContacts, getHistory, deleteContact, showForm } from '../middlewares/middlewares';
import ContactList from '../components/ContactList/ContactList';
import { contactsSelector, isLoadingSelector } from '../selectors/selectors';

const mapDispatchToProps = {
  getContacts, getHistory, deleteContact, showForm
};

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelector(state),
    isLoading: isLoadingSelector(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
