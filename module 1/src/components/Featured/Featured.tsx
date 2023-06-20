// import { FC } from 'react';
import Card from 'src/ui/Card';
import cardImg from '../../assets/images/cardImg.webp';
import styles from './Featured.module.css';

const data = {
  title: 'test',
  data: {
    heading: 'KEY TRIALS',
    desc: 'Antipyretic Efficacy of Paracetamol, Ibuprofen and Paracetamol-ibuprofen Combination in Indian Child.',
    imgSrc: cardImg,
  },
};

const Featured = ({}) => {
  return (
    <div className={styles.test}>
      <Card fields={data} />
      <div> test </div>
    </div>
  );
};

export default Featured;
