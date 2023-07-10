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

const CiplaLogo = ({ fields }: CiplaLogoMenuProps): JSX.Element => {
  return (
    <div>
      <Link field={{ href: fields?.data?.item?.srcurl?.url }}>
        <LogoImg field={fields?.data?.item?.srcimage} alt="" width={100} height={100} />
      </Link>
    </div>
  );
};

export default CiplaLogo;
