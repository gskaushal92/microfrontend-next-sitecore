import { FC } from 'react';
import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Slider from 'react-slick';
import Image, { StaticImageData } from 'next/image';
import slider_1 from '../../assets/images/slider_1.jpg';
import slider_2 from '../../assets/images/slider_2.jpg';

interface PromotionalBannerProps extends ComponentProps {
  fields: {
    heading: Field<string>;
    images: Array<StaticImageData>;
  };
}

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const PromotionalBanner: FC<PromotionalBannerProps> = ({ fields }) => {
  fields.images = [slider_1, slider_2];
  return (
    <>
      <Slider {...settings}>
        {fields?.images.map((image, index) => {
          return <Image key={index} src={image} alt="image" />;
        })}
      </Slider>
    </>
  );
};

export default withDatasourceCheck()<PromotionalBannerProps>(PromotionalBanner);
