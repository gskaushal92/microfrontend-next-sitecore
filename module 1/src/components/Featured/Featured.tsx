// import { FC } from 'react';
import Card from 'src/ui/Card';
import cardImg from '../../assets/images/cardImg.webp';
import styles from './Featured.module.css';
import { CardContainer } from 'src/ui/Card/Card.styled';

const data = {
  title: 'Featured',
  data: {
    heading: 'KEY TRIALS',
    desc: 'Antipyretic Efficacy of Paracetamol, Ibuprofen and Paracetamol-ibuprofen Combination in Indian Child.',
    imgSrc: cardImg,
  },
};

const Featured = ({}) => {
  return (
    <CardContainer>
      <h2>{data.title}</h2>
      <div className={styles.test}>
        <Card fields={data} />
        <Card fields={data} />
        <p>test</p>
        <p>test abc</p>
      </div>
    </CardContainer>
  );
};

export default Featured;
