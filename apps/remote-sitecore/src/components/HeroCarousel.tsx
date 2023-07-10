'use client';
import { Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import Slider from 'react-slick';
import Image, { StaticImageData } from 'next/image';
import slider_1 from '../assets/images/slider_1.jpg';
import slider_2 from '../assets/images/slider_2.jpg';

type HeroCarouselProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
  images: Array<StaticImageData>;
};

// const images = [slider_1, slider_2];

const HeroCarousel = (props: HeroCarouselProps): JSX.Element => {
  // <div>
  //   <p>HeroCarousel Component</p>
  //   <Text field={props.fields.heading} />
  // </div>
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  props.images = [slider_1, slider_2];

  return (
    <div>
      {/* <h2> Single Item</h2> */}
      <Slider {...settings}>
        {props?.images.map((image, index) => {
          return <Image key={index} src={image} alt="image" />;
        })}
      </Slider>
    </div>
  );
};

export default withDatasourceCheck()<HeroCarouselProps>(HeroCarousel);
