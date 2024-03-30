import { FC } from 'react';

interface NewsProps {
  title: string;
}

const News: FC<NewsProps> = ({ title }) => {
  return <div>News ${title}</div>;
};

export default News;
