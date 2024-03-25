import React from 'react';
import styled from 'styled-components';

const GreetingContainer = styled.div`
  text-align: left;
  h2 {
  }
  subtitle {
  }
`;

const Greeting = () => {
  return (
    <GreetingContainer>
      <h2>Hablemos! Contame que tenes en mente</h2>
      <subtitle>Veamos que soluciones podemos crear juntos</subtitle>
    </GreetingContainer>
  );
};

export default Greeting;
