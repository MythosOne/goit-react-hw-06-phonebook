import { deleteContacts } from '../redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList, ContactsItem, DeleteButton } from './App.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

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
                dispatch(deleteContacts(contact.id));
              }}
            >
              delete
            </DeleteButton>
          }
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
