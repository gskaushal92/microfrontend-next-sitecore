import { FC } from 'react';
import { ComponentProps } from 'lib/component-props';
import Slider from 'react-slick';
import { NextImage } from '@sitecore-jss/sitecore-jss-nextjs';

type BannerProps = {
  backgroundImage: {
    src: string;
  };
};
type PromotionalBannerProps = ComponentProps & {
  fields: {
    data: {
      item: {
        slideSelector: {
          targetItems: Array<BannerProps>;
        };
      };
    };
  };
};

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
};

const PromotionalBanner: FC<PromotionalBannerProps> = ({ fields }) => {
  // fields.images = [slider_1, slider_2];
  const slides = fields?.data?.item?.slideSelector?.targetItems;
  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => {
          return (
            <NextImage
              key={index}
              field={slide?.backgroundImage}
              alt="image"
              height={400}
              width={100}
            />
          );
        })}
      </Slider>
    </>
  );
};

export default PromotionalBanner;
