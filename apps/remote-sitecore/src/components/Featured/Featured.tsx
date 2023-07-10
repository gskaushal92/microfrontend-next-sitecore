import { FC } from 'react';
import Card from 'src/ui/Card';
import styles from './Featured.module.css';
import { CardContainer } from 'src/ui/Card/Card.styled';
import { ComponentProps } from 'lib/component-props';

export type FeatureCardProps = {
  id: string;
  title: {
    value: string;
  };
  content: {
    value: string;
  };
  image: {
    src: string;
  };
  publishedDate: {
    formattedDateValue: string;
  };
};
type FeaturedProps = ComponentProps & {
  fields: {
    data: {
      item: {
        selectedNews: {
          targetItems: Array<FeatureCardProps>;
        };
      };
    };
  };
};

const Featured: FC<FeaturedProps> = ({ fields }): JSX.Element => {
  const featuredData = fields?.data?.item?.selectedNews?.targetItems;
  return (
    <CardContainer suppressHydrationWarning>
      <h2>Featured</h2>
      <div className={styles.test}>
        {featuredData?.map((feature) => {
          return <Card key={feature.id} fields={feature} />;
        })}
        {/* <Card fields={data} />
        <Card fields={data} /> */}
      </div>
    </CardContainer>
  );
};

export default Featured;
