import { FC } from "react";
import { NavigationWrapper, NavUl, NavLi } from "./Navigation.styles";
import { Link, LinkField } from "@sitecore-jss/sitecore-jss-nextjs";

type NavigationProps = {
    nav: string;
    link:  LinkField;
};

const url = "https://google.com";
const navData = [
  { nav: "Vehicles", link: { href: url } },
  { nav: "About Us", link: { href: url } },
  { nav: "Services", link: { href: url } },
  { nav: "Media", link: { href: url } },
  { nav: "Rewards", link: { href: url } },
  { nav: "Program", link: { href: url } },
  { nav: "Ease of Finance", link: { href: url } },
  { nav: "Testimonials", link: { href: url } },
  { nav: "Product Application", link: { href: url } },
  { nav: "English", link: { href: url } },
];

const Navigation: FC<NavigationProps[]> = ({}) => {
  return (
    <NavigationWrapper>
      <NavUl>
        {navData.map((nav, index) => (
          <NavLi key={nav.nav + index}>
            <Link field={nav.link}>{nav.nav}</Link>
          </NavLi>
        ))}
      </NavUl>
    </NavigationWrapper>
  );
};

export default Navigation;
