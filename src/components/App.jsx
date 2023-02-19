import { ContactForm } from './ContactForm';
// import Filter from './Filter';
import ContactList from './ContactList';
import { Container, TitleContainer, TitleContacts} from './App.styled';


export const App = () => {

  // const addContacts = (name, number) => {
  //   const loweredCase = name.toLowerCase().trim();
  //   const searchName = contacts
  //     .some((cont) => cont.name.toLowerCase().trim() === loweredCase);

  //   if (searchName) {
  //     alert(`${name} is already in contacts`);
  //   } else if (name.length === 0) {
  //     alert("Fields must be filled!");
  //   } else {
  //     setContacts([
  //       ...contacts,
  //       {
  //         id: nanoid(),
  //         name,
  //         number,
  //       }]);
  //   };
  // };

  // const changeFilter = filter => {
  //   setFilter(filter);
  // };

  // const visibleContacts = () => {
  //   return contacts.filter(contacts => contacts.name.toLowerCase().includes(filter.toLowerCase()));
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(({ id }) => id !== contactId));
  // };

  return (
    <Container>
      <TitleContainer>Phonebook</TitleContainer>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      {/* <Filter value={filter} onChangeFilter={changeFilter} /> */}
      <ContactList />
    </Container>
  );
};

export default App;