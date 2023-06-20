// import { FC } from 'react';
import { Container, WelcomeText, UpdateText } from './WelcomCard.styles';

// interface WelcomeCardProps {
//   title: string;
// }

// const WelcomeCard: FC<WelcomeCardProps> = ({}) => {
const WelcomeCard = () => {
  return (
    <Container>
      <WelcomeText>Hey there! Welcome!</WelcomeText>
      <UpdateText>Get updated on</UpdateText>
      <select>
        <option>Test 1</option>
        <option>Test 2</option>
      </select>
    </Container>
  );
};

export default WelcomeCard;
