// import { FC } from 'react'
import Link from 'next/link';
import { LogoImg } from './Logo.styles';
// import Image from 'next/image';
import cmLogo from '../../assets/images/CM_New_Final-02.png';

// interface LogoProps {

// }

const Logo = ({}) => {
  return (
    <div>
      <Link href="/">
        {/* <NextImage field={fields?.data?.datasource?.image?.jss?.value} /> */}
        <LogoImg src={cmLogo} alt="" />
      </Link>
    </div>
  );
};

export default Logo;
