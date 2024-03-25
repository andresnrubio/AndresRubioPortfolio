import React from 'react';
import styled from 'styled-components';
import envelope_plain from '../assets/envelope_plain.png';
import envelope_solid from '../assets/envelope_solid.png';
import copy_plain from '../assets/copy_plain.png';
import copy_solid from '../assets/copy_solid.png';
import at_plain from '../assets/at_plain.png';
import at_solid from '../assets/at_solid.png';

const EmailContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--text-box-color-33);
  border-radius: 5px;
  padding: 1rem;
  iconContainer {
    padding: 0 3px;
    border-radius: 4px;
  }
  .icon {
    width: auto;
    height: 1rem;
    &:hover {
    }
  }
  .iconLight {
    display: var(--light-mode);
  }
  .iconDark {
    display: var(--dark-mode);
  }

  .infoContainer {
    text-align: left;
  }
`;

const EmailContact = () => {
  return (
    <EmailContactContainer>
      <iconContainer>
        <img src={envelope_plain} alt="" className="iconDark" />
        <img src={envelope_solid} alt="" className="iconLight" />
      </iconContainer>
      <div className="infoContainer">
        <p>Escribime a:</p>
        <div>
          <a href="mailto:  rubioandres.dev@gmail.com">
            rubioandres.dev
            <span>
              <img src={at_plain} alt="" className="icon" />
            </span>
            gmail.com
          </a>
          <a onClick={() => navigator.clipboard.writeText('rubioandres.dev@gmail.com')}>
            <img src={copy_plain} alt="" className="icon iconDark" />
            <img src={copy_solid} alt="" className="icon iconLight" />
          </a>
        </div>
      </div>
    </EmailContactContainer>
  );
};

export default EmailContact;
