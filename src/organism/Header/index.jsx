import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header =()=> {
  return (
    <Navbar>
      <h1>Rick And Morty Wiki</h1>
      <NavMenu>
        <NavItem>
          <NavLink href="/">Character</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/episodes">Episodes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/location">Locations</NavLink>
        </NavItem>
      </NavMenu>
    </Navbar>
  );
}

export default Header;
