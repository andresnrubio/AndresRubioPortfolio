import React from 'react';
import styled from 'styled-components';

const SideBarMenu = styled.div`
  width: 100vw;
  max-width: 300px;
  height: 100vh;
  background-color: var(--text-box-color-33);
  align-self: start;
  /* border: 1px red solid; */
  position: relative;
`;

const Sidebar = () => {
  return <SideBarMenu />;
};

export default Sidebar;
