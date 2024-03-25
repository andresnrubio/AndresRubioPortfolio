import React from 'react';
import styled from 'styled-components';
import Greeting from '../components/Greeting.jsx';
import EmailContact from '../components/EmailContact.jsx';
import ContactForm from '../components/ContactForm.jsx';
import AlternativeContactsWeb from '../components/AlternativeContactsWeb';

const ContactPageContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Contact = () => {
  return (
    <ContactPageContainer>
      <Greeting />
      <EmailContact />
      {/* <ContactForm /> */}
      <AlternativeContactsWeb />
    </ContactPageContainer>
  );
};

export default Contact;
