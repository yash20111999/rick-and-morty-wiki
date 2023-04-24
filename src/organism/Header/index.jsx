import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { SideBar } from '../../atoms';

const Navbar = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
`

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

const Header = () => {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  
  return (
    <Navbar>
      <h1>Rick And Morty Wiki</h1>
      {screenWidth>700?<NavMenu >
        <NavItem>
          <NavLink href="/">Character</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/episodes">Episodes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/location">Locations</NavLink>
        </NavItem>
      </NavMenu>:<SideBar/>}
    </Navbar>
  );
}

export default Header;
