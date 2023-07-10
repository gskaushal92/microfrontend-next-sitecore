import { FC } from 'react';
import { Container, WelcomeText, UpdateText } from './WelcomCard.styles';
import { ComponentProps } from 'lib/component-props';

type Speciality = {
  title: {
    value: string;
  };
};

type WelcomeCardProps = ComponentProps & {
  fields: {
    data: {
      item: {
        welcomeText: {
          value: string;
        };

        specializationText: {
          value: string;
        };
        selectedItem: {
          targetItems: Array<Speciality>;
        };
      };
    };
  };
};

const WelcomeCard: FC<WelcomeCardProps> = ({ fields }) => {
  return (
    <Container>
      <WelcomeText>{fields?.data?.item?.welcomeText?.value}</WelcomeText>
      <UpdateText>{fields?.data?.item?.specializationText?.value}</UpdateText>
      <select>
        {fields?.data?.item?.selectedItem?.targetItems?.map((item, index): JSX.Element => {
          return <option key={item?.title?.value + index}>{item?.title?.value}</option>;
        })}
      </select>
    </Container>
  );
};

export default WelcomeCard;
