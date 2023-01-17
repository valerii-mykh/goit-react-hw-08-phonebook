import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectLoading } from 'redux/contacts/selectors';
import { Typography } from '@mui/material';
import { ContactsWrapper, Section } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <Section>
        <ContactsWrapper>
          <Typography component="h2" variant="h4">
            Phonebook
          </Typography>
          <ContactForm />
        </ContactsWrapper>
      </Section>
      <Section>
        <ContactsWrapper>
          <Typography component="h3" variant="h4" mb={2}>
            Contacts
          </Typography>

          {contacts.length > 1 && <Filter />}
          {contacts.length === 0 && (
            <Typography
              component="h4"
              variant="h6"
              mt={4}
              textAlign="center"
              color="#12237D"
            >
              Start adding your contacts and they'll appeare here 😉
            </Typography>
          )}
          {isLoading && 'Loading...'}
          <ContactList />
        </ContactsWrapper>
      </Section>
    </main>
  );
}
