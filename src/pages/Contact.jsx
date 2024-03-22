import React from 'react';
import styled from 'styled-components';
import AlternativeContactsWeb from '../components/ContactLinks';

const ContactPageContainer = styled.section`
  width: 100%;
`;

const Contact = () => {
  return (
    <>
      <AlternativeContactsWeb />
    </>
  );
};

export default Contact;
