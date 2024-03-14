import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypingAnimation from '../utils/Animations';

const Title = () => {
  const [title, setTitle] = useState('Andrés Rubio');
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const options = ['Andrés Rubio', 'Andrew', 'Andy'];

  //   const intervalId = setInterval(() => {
  //     setTitle(options[index]);

  //     if (index < options.length - 1) {
  //       setIndex((index) => index + 1);
  //     } else {
  //       setIndex(0);
  //     }
  //   }, 4000);

  //   return () => clearInterval(intervalId);
  // }, [index]);

  return (
    <Link to="/">
      Andres N. Rubio
      {/* Hi! My name is <TypingAnimation text={title} delay={100} /> */}
    </Link>
  );
};

export default Title;
