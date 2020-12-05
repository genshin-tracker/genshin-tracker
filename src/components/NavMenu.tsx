import styled from 'styled-components';

const NavMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  height: 50px;
  padding: 0 10px;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};
  z-index: 9999;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;
export default NavMenu;
