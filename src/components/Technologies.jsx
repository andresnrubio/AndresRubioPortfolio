import React, { useState } from 'react';
import styled from 'styled-components';
<<<<<<< HEAD

const Logo = styled.i`
  color: var(--text-color);
  font-size: 3.5rem;
  &:hover {
    text-shadow: 0 0 10px var(--text-shadow);
  }
`;
=======
import DeviconLogo from './DeviconLogo';
>>>>>>> a134cd7ccb3e92225f1c9b78b165c463118778ef

const TechnologiesSection = styled.section`
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
  margin: 2rem auto;
`;

const Technologies = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredLogo(index);
  };

  const handleMouseLeave = () => {
    setHoveredLogo(null);
  };

  return (
    <TechnologiesSection>
      {[...Array(11)].map((_, index) => (
        <DeviconLogo
          key={index}
          className={`devicon-${icons[index]} ${hoveredLogo === index ? 'colored' : ''}`}
          hovered={hoveredLogo === index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </TechnologiesSection>
  );
};

const icons = [
  'html5-plain',
  'css3-plain',
  'javascript-plain',
  'typescript-plain',
  'react-original',
  'nodejs-plain-wordmark',
  'express-original',
  'python-plain'
];

export default Technologies;
