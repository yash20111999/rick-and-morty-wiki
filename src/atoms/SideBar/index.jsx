import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Icon = styled.div`
  transform: rotate(90deg);
  cursor:pointer;
`

const NavLink = styled.a`
  text-decoration: none;
  color: #040202;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #ccc;
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: calc(100% - 30px);
  right: 0;
  z-index: 2;
  padding: 8px;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;
  color: black;
`;

const SideBar = () => {

  const [toggle, setToggle] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // add event listener to detect clicks outside container
    document.addEventListener("mouse", handleClickOutside);
    return () => {
      // remove event listener on unmount
      document.removeEventListener("mouse", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setToggle(false);
    }
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <Button onClick={() => setToggle(!toggle)}>
        <Icon>
          |||
        </Icon>
      </Button>
      {
        toggle &&
        <DropdownContainer ref={containerRef} >
          <DropdownItem>
            <NavLink href="/">Character</NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink href="/episodes">Episodes</NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink href="/location">Locations</NavLink>
          </DropdownItem>
        </DropdownContainer>
      }
    </>
  )
}

export default SideBar
