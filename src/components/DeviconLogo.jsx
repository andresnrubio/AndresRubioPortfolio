import styled from 'styled-components';

const Logo = styled.i`
  color: var(--text-color);
  font-size: ${(props) => (props.size ? props.size : '2.5rem')};
`;

export default Logo;
