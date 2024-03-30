import { FC } from "react";
import { ComponentProps } from "../../../lib/component-props";
import { Field } from "@sitecore-jss/sitecore-jss-nextjs";
import {
  FooterContainer,
  FooterHeading,
  LinkList,
  LinkItem,
  NavLink,
} from "./Footer.styled";
import { footerData } from "./data";

type FooterProps = ComponentProps & {
  fields: {
    data: {
      datasource: {
        heading: {
          jsonValue: Field<string>;
        };
        children: [];
      };
    };
  };
};

const Footer: FC<FooterProps> = ({ fields }) => {
  const { heading, children } = footerData?.fields?.data?.datasource;
  return (
    <FooterContainer>
      <FooterHeading>{heading}</FooterHeading>
      <LinkList>
        {children.map((link) => (
          <LinkItem key={link.id}>
            <NavLink href={link.url}>{link.text}</NavLink>
          </LinkItem>
        ))}
      </LinkList>
    </FooterContainer>
  );
};

export default Footer;
