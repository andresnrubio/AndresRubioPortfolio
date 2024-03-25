import React, { useState } from 'react';
import styled from 'styled-components';
import DeviconLogo from './DeviconLogo';

const TechnologiesSection = styled.section`
  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
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
