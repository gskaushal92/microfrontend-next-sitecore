import { FC } from "react";
import { Navul, NavSubul } from "./Navigaion.styles";
import Link from 'next/link';
// import { Link } from "@sitecore-jss/sitecore-jss-nextjs";

import { ComponentProps } from "../../../lib/component-props";

type Nav = {
  displayName: string;
  field: {
    jsonValue: {
      value: {
        anchor: string;

        href: string;

        linktype: string;

        target: string;

        text: string;

        url: string;
      };
    };
  };
  title: {
    value: string;
  };
};

type MainNav = Nav & {
  children: {
    results: Array<Nav>;
  };
};

type NavigationProps = ComponentProps & {
  fields: {
    data: {
      item: {
        children: {
          results: Array<MainNav>;
        };
      };
    };
  };
};

// const url = {
//   href: "http://localhost:81/brand",
// };

const Navigation: FC<NavigationProps> = ({ fields }): JSX.Element => {
  const navs = fields?.data?.item?.children?.results;
  console.log('navs',navs);
  return (
    <Navul>
      {navs.map((nav, index) => (
        <li key={nav?.title?.value + index}>
          {nav?.title?.value}
          {nav?.children?.results?.length > 0 && (
            <NavSubul>
              {nav?.children?.results?.map((subnav, index) => (
                <li key={subnav?.title?.value + index}>
                  <Link href={subnav.field.jsonValue.value.href}>{subnav?.title?.value}</Link>
                </li>
              ))}
            </NavSubul>
          )}
        </li>
      ))}
    </Navul>
  );
};

export default Navigation;
