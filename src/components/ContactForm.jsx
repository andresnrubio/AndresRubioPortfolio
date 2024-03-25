import React from 'react';
import styled from 'styled-components';

const Form = styled.form``;

const ContactForm = () => {
  return (
    <Form>
      <input type="text" name="Message" id="message" />
      <input type="text" name="Author" id="message" />
    </Form>
  );
};

export default ContactForm;
