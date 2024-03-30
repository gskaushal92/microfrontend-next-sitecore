import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const FooterHeading = styled.h4`
  margin: 0;
`;

const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const LinkItem = styled.li`
  margin-right: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export { FooterContainer, FooterHeading, LinkList, LinkItem, NavLink };
