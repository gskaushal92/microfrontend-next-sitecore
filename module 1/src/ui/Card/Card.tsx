import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
// import Image, { StaticImageData } from 'next/image';
// import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { FC } from 'react';
// import { ComponentProps } from 'lib/component-props';
// import cardImg from '../assets/images/cardImg.webp';
import { StaticImageData } from 'next/image';
import { CardWrapper, ImageWrapper, Heading, Desc, ContentWrapper } from './Card.styled';

interface CardProps {
  fields: {
    title: string;

    data: {
      heading: string;
      imgSrc: StaticImageData;
    };
  };
}

const Card: FC<CardProps> = ({ fields }) => {
  return (
    <>
      <CardWrapper>
        <ContentWrapper>
          <Heading>Key Trials</Heading>
          <Desc>
            Antipyretic Efficacy of Paracetamol, Ibuprofen and Paracetamol-ibuprofen Combination in
            Indian Child
          </Desc>
          <p>1 Mar, 23</p>
        </ContentWrapper>
        <ImageWrapper>
          <NextImage field={fields.data.imgSrc} alt="" />
        </ImageWrapper>
      </CardWrapper>
    </>
  );
};

export default Card;

// export default withDatasourceCheck()<CardProps>(Card);
