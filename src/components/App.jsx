import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { Container, TitleContainer, TitleContacts, Message } from './App.styled';


export const App = () => {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  return (
    <Container>
      <TitleContainer>Phonebook</TitleContainer>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <Filter />
      <ContactList />
      <Message>{contacts.length === 0 &&
        'You do not have contacts 😯'}</Message>
    </Container>
  );
};

export default App;