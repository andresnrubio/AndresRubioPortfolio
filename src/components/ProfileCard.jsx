import React from 'react';
import styled from 'styled-components';
import profilePicture from '../assets/profile.jpg';

const ProfileCard = styled.div`
  width: 95%;
  margin-bottom: 2rem;
  position: relative;

  .container {
    padding: 1rem;
    margin: 0 auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    position: relative;
    .profileTitle {
      width: 100%;
      text-align: start;
      h2 {
        letter-spacing: 2px;
        line-height: 2rem;
      }
      p {
        letter-spacing: 1px;
      }
    }
    img {
      width: 90px;
      border-radius: 18px;
      border: 2px solid var(--text-color);
      transform: scaleX(-1);
      filter: var(--picture-filter);
      z-index: 1;
    }
  }
`;

const Corner = styled.div`
  width: 10px;
  height: 10px;
  border-style: solid;
  border-color: var(--text-color);
  position: absolute;
  ${(props) =>
    props.top
      ? 'top: 0; left: 0; border-width:2px 0 0 2px;'
      : 'bottom: 0; right: 0; border-width:0px 2px 2px 0;'}/* Position the corners */
`;

const Home = () => {
  return (
    <>
      <ProfileCard>
        <div className="container">
          <Corner top />
          <div className="profileTitle">
            <h2>Andres Nicolás Rubio</h2>
            <p>Desarrollador fullstack</p>
          </div>
          <div>
            <img src={profilePicture} alt="" />
          </div>
          <Corner bottom />
        </div>
      </ProfileCard>
    </>
  );
};

export default Home;
