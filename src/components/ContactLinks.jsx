import React from 'react';
import styled from 'styled-components';
import Logo from './DeviconLogo';
import instagram_solid from '../assets/instagram_solid.png';
import instagram_plain from '../assets/instagram_plain.png';
import discord_solid from '../assets/discord_solid.png';
import discord_plain from '../assets/discord_plain.png';
const ContactWebLinks = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkLine = styled.div`
  display: flex;
  gap: 1rem;
  img {
    color: red;
  }
  a {
    color: var(--text-color);
    font-size: 1.5rem;
    &:hover {
      border-bottom: 1px var(--text-color-important) solid;
    }
  }
`;

const AlternativeContactsWeb = () => {
  return (
    <ContactWebLinks>
      <h3>Or find me on the web</h3>
      <LinkLine>
        <Logo className="devicon-linkedin-plain" size="1.5rem" />
        <a href="https://www.linkedin.com/in/andres-n-rubio" target="blank">
          /andres-n-rubio/
        </a>
      </LinkLine>
      <LinkLine>
        <Logo className="devicon-github-original" size="1.5rem" />
        <a href="https://github.com/andresnrubio/" target="blank">
          /andresnrubio/
        </a>
      </LinkLine>
      <LinkLine>
        <Logo className="devicon-github-original" size="1.5rem" />
        <a href="https://github.com/andresnrubio/" target="blank">
          /andrew88_/
        </a>
      </LinkLine>
      <LinkLine>
        <Logo className="devicon-github-original" size="1.5rem" />
        <img src={instagram_solid} alt="ig" className="light" />
        <img src={instagram_plain} alt="ig" className="dark" />
        <a href="https://github.com/andresnrubio/" target="blank">
          /rr.andres/
        </a>
      </LinkLine>
    </ContactWebLinks>
  );
};

export default AlternativeContactsWeb;
