// import { FC } from 'react'
import Link from 'next/link';
import { LogoImg } from './Logo.styles';
import cmLogo from '../../assets/images/CM_New_Final-02.png';
import { ComponentProps } from 'lib/component-props';

export type LogoMenuProps = ComponentProps & {
  fields: {
    data: {
      item: {
        image: {
          src: string;
        };

        logoURL: {
          url: string;
        };
      };
    };
  };
};

const Logo = (props: LogoMenuProps): JSX.Element => {
  // const test = props;
  console.warn('Logo', props);
  return (
    <div>
      <Link href="/">
        <LogoImg src={cmLogo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
