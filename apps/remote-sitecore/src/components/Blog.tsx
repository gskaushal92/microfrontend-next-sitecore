import { FC } from 'react';
import { Text, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

// interface BlogProps {
//   title: string;
//   // fields: object;
// }

type BlogProps = ComponentProps & {
  fields: {
    title: Field<string>;
    // content: Field<string>;
  };
};

const Blog: FC<BlogProps> = ({ fields }) => {
  return (
    <div>
      <Text field={fields.title} data-sample="other-attributes-pass-through" />
      <p>Testing dynamic </p>
    </div>
  );
};

export default Blog;
