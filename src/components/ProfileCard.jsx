import React from 'react';
import styled from 'styled-components';
import profilePicture from '../assets/profile.jpg';

const ProfileCard = styled.div`
  width: 95%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 20px;
  /* background: var(--text-box-color-33); */
  display: flex;
  align-items: center;

  .profileTitle {
    width: 100%;
    text-align: start;
    h2 {
      letter-spacing: 2px;
      line-height: 2rem;
    }
    h4 {
      letter-spacing: 1px;
    }
  }
  img {
    width: 90px;
    border-radius: 18px;
    border: 2px solid var(--text-color);
    transform: scaleX(-1);
    filter: var(--picture-filter);
  }
`;

const Home = () => {
  return (
    <ProfileCard>
      <div className="profileTitle">
        <h2>Andres Nicolás Rubio</h2>
        <p>Desarrollador fullstack</p>
      </div>
      <div>
        <img src={profilePicture} alt="" />
      </div>
    </ProfileCard>
  );
};

export default Home;
