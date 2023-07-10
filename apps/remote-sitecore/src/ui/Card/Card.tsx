import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';
import { FC } from 'react';
import { CardWrapper, ImageWrapper, Heading, Desc, ContentWrapper } from './Card.styled';
import { FeatureCardProps } from 'components/Featured/Featured';

interface CardProps {
  fields: FeatureCardProps;
}

const Card: FC<CardProps> = ({ fields }) => {
  return (
    <>
      <CardWrapper>
        <ContentWrapper>
          <Heading>{fields.title.value}</Heading>
          <Desc>{fields.content.value}</Desc>
          <p>{fields?.publishedDate?.formattedDateValue}</p>
        </ContentWrapper>
        <ImageWrapper>
          <NextImage field={fields.image} alt="" priority={true} width={100} height={100} />
        </ImageWrapper>
      </CardWrapper>
    </>
  );
};

export default Card;
