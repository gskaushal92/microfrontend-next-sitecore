import { FC } from 'react';
// import dynamic from 'next/dynamic';

interface TestProps {
  title: string;
}

// const News = dynamic(() => import('app1/News'), {
//   ssr: true,
// });

const MyComponent: FC<TestProps> = ({ title }) => {
  return (
    <div>
      Test ${title}
      {/* <News /> */}
    </div>
  );
};

export default MyComponent;
