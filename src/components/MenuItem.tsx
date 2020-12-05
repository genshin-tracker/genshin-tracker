import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';

const MenuItemWrapper = styled.li`
  float: left;
  border-right: 1px solid ${({ theme }) => theme.foregroundDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlack};
  }
`;
const MenuItemContent = styled(NavLink)`
  display: block;
  position: relative;
  padding: 0 8px;
  margin: auto;
  text-decoration: none;
  line-height: 50px;
  flex: 1;
  color: ${({ theme }) => theme.foreground};
  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 4px;
    background-color: ${({ theme }) => theme.primary};
    transition: width 0.3s ease-in-out;
  }
  &.active:before {
    width: 100%;
  }
`;
export default function NavMenu(props: NavLinkProps) {
  return (
    <MenuItemWrapper>
      <MenuItemContent {...props} />
    </MenuItemWrapper>
  );
}
