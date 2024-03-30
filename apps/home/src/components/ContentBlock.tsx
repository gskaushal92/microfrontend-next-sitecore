import { ComponentProps } from 'lib/component-props';
import {
  Text,
  RichText,
  Field,
  GetStaticComponentProps,
  withDatasourceCheck,
} from '@sitecore-jss/sitecore-jss-nextjs';

type ContentBlockProps = ComponentProps & {
  post: {
    id: Field<number>;
    userId: Field<number>;
    title: Field<string>;
    body: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ post }: ContentBlockProps): JSX.Element => (
  <div className="contentBlock">
    <Text tag="h2" className="contentTitle" field={post.title} />

    <RichText className="contentDescription" field={post.body} />
  </div>
);

// const fetchPost = () => fetch('/postService/post').then((res) => res.json());

// export const getServerSideProps: GetStaticComponentProps = async (context: any) => {
//   console.log(context);
//   const post = await fetchPost();
//   return { props: { post } };
// };

export default withDatasourceCheck()<ContentBlockProps>(ContentBlock);
