import { ImageField, Link, LinkField } from "@sitecore-jss/sitecore-jss-nextjs";
import { LogoImg, LogoContainer } from "./Logo.styles";
import { ComponentProps } from "../../../lib/component-props";

type LogoProps = ComponentProps & {
  fields: {
    data: {
      datasource: {
        image: {
          jsonValue: ImageField;
        };
        url: {
          jsonValue: LinkField;
        };
      };
    };
  };
};

const Logo = ({ fields }: LogoProps): JSX.Element => {
  const datasource = fields?.data?.datasource;
  return (
    <LogoContainer>
      <Link field={datasource?.url?.jsonValue}>
        <LogoImg
          field={datasource?.image?.jsonValue}
          alt="Logo"
          width={100}
          height={100}
        />
      </Link>
    </LogoContainer>
  );
};

export default Logo;
