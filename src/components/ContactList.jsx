import { deleteContacts } from '../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, DeleteButton } from './App.styled';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    console.log(contacts, 'map');

    return (
            <ContactsList>
                {contacts.map(contact => (
                    <ContactsItem key={contact.id}>
                        {`${contact.name} : ${contact.number}`}
                        {
                            <DeleteButton
                                type="button"
                                name="delete"
                                onClick={() => {
                                    dispatch(deleteContacts(contact.id))
                                }}
                            >
                                delete
                            </DeleteButton>
                        }
                    </ContactsItem>
                ))}
            </ContactsList>
    )
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
}

export default ContactList;