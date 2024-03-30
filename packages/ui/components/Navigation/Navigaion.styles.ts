import styled from "styled-components";

const NavContainer = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export { NavContainer, NavList, NavItem, NavLink };
