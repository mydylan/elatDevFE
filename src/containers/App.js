import { connect } from 'react-redux';
import { getContacts, getHistory, deleteContact } from '../middlewares/middlewares';
import ContactList from '../components/ContactList/ContactList';
import { contactsSelector, isLoadingSelector, pageSelector, limitSelector } from '../selectors/selectors';

const mapDispatchToProps = {
  getContacts, getHistory, deleteContact
};

const mapStateToProps = (state) => {
  return {
    contacts: contactsSelector(state),
    isLoading: isLoadingSelector(state),
    page: pageSelector(state),
    limit: limitSelector(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
