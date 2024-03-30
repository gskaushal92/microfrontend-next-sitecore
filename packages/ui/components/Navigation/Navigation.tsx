import { Field } from "@sitecore-jss/sitecore-jss-nextjs";
import { FC } from "react";
import { navigationData } from "./data";
import { NavContainer, NavList, NavItem, NavLink } from "./Navigaion.styles";

type NavProps = {
  fields: {
    data: {
      datasource: {
        heading: {
          jsonValue: Field<string>;
        };
      };
    };
  };
};

const Nav: FC<NavProps> = ({ fields }) => {
  const datasource = navigationData?.fields?.data?.datasource;
  return (
    <NavContainer>
      <NavList>
        {datasource?.children.map((item) => (
          <NavItem key={item.id}>
            <NavLink href={item.path}>{item.title}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Nav;
