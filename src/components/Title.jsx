import { useState, useEffect } from 'react';
import styled from 'styled-components';
import TypingAnimation from '../utils/Animations';

const HeroTitle = styled.span`
  display: block;
  grid-template-columns: 100px 1fr;
  gap: 1rem;
`;

const Title = () => {
  const [title, setTitle] = useState('Andrés Rubio');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const options = ['Andrés Rubio', 'Andrew', 'Andy'];

    const intervalId = setInterval(() => {
      setTitle(options[index]);

      if (index < options.length - 1) {
        setIndex((index) => index + 1);
      } else {
        setIndex(0);
      }
    }, 4000);

    return () => clearInterval(intervalId);
  }, [index]);

  return (
    <>
      Hi! My name is <TypingAnimation text={title} delay={100} />
    </>
  );
};

export default Title;
