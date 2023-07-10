// import Link from 'next/link';
import { Link } from '@sitecore-jss/sitecore-jss-nextjs';
import { LogoImg } from './CiplaLogo.styles';
// import cmLogo from '../../assets/images/CM_New_Final-02.png';
import { ComponentProps } from 'lib/component-props';

type CiplaLogoMenuProps = ComponentProps & {
  fields: {
    data: {
      item: {
        srcimage: {
          src: string;
        };

        srcurl: {
          url: string;
        };
      };
    };
  };
};

const CiplaLogo = (props: CiplaLogoMenuProps): JSX.Element => {
  return (
    <div>
      <Link field={{ href: 'http://localhost:81/' }}>
        <LogoImg field={props?.fields?.data?.item?.srcimage} alt="" width={100} height={100} />
      </Link>
    </div>
  );
};

export default CiplaLogo;
