import React from 'react';
import styled from 'styled-components';

const Logo = styled.i`
  font-size: 3.5rem;
  color: var(--text-color);

  &.colored {
    &:hover {
      color: initial;
    }
  }
`;

const Technologies = () => {
  return (
    <>
      <Logo className="devicon-react-original colored" />
    </>
  );
};

export default Technologies;
