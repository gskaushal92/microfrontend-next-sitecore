// import { FC } from 'react';
import { Navul, NavSubul } from './Navigaion.styles';
import Link from 'next/link';

// import { ReactNode } from 'react';

// interface NavigationProps {
//   heading: string;
// }

// const Navigation: FC<NavigationProps> = ({}) => {

const navData = [
  {
    title: 'Quick Reads',
    subPages: ['News', 'Guidelines', 'Journals', 'Conference Highlights'],
  },
  {
    title: 'Explore',
    subPages: ['Resources', 'Key Trials'],
  },
];

const Navigation = ({}) => {
  return (
    <Navul>
      {/* {navData?.map((obj): ReactNode => (
          <li>obj.title<li/>;)
        )} */}
      {navData.map((obj) => (
        <li key={obj.title}>
          {obj.title}
          <NavSubul>
            {obj?.subPages.map((subnav) => (
              <li key={subnav}>
                <Link href="/">{subnav}</Link>
              </li>
            ))}
          </NavSubul>
        </li>
      ))}
    </Navul>
  );
};

export default Navigation;
