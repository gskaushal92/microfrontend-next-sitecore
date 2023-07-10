import React from 'react';
import Head from 'next/head';
import {
  Placeholder,
  getPublicUrl,
  LayoutServiceData,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';
// import DefaultNavigation from 'src/DefaultNavigation';
import Scripts from 'src/Scripts';
// import Featured from 'components/Featured/Featured';
// import WelcomeCard from 'components/WelcomeCard/WelcomeCard';
// import Navigation from 'components/Navigation/Navigation';
// import Logo from 'components/Logo/Logo';
// // import HeroCarousel from 'sitecore/definitions/components/HeroCarousel.sitecore';
// import PromotionalBanner from 'components/PromotionalBanner';
// import Card from './ui/Card/Card';
// import cardImg from './assets/images/cardImg.webp';

// Prefix public assets with a public URL to enable compatibility with Sitecore editors.
// If you're not supporting Sitecore editors, you can remove this.
const publicUrl = getPublicUrl();

interface LayoutProps {
  layoutData: LayoutServiceData;
}

interface RouteFields {
  [key: string]: unknown;
  pageTitle: Field;
}

// const data = {};
// const data = {
//   title: 'test',
//   data: {
//     heading: 'KEY TRIALS',
//     desc: 'Antipyretic Efficacy of Paracetamol, Ibuprofen and Paracetamol-ibuprofen Combination in Indian Child.',
//     imgSrc: cardImg,
//   },
// };

const Layout = ({ layoutData }: LayoutProps): JSX.Element => {
  const { route } = layoutData.sitecore;

  const fields = route?.fields as RouteFields;

  return (
    <>
      <Scripts />
      <Head>
        <title>{fields.pageTitle.value.toString() || 'Page'}</title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
      </Head>
      {/* <div className="nav-container">
        <Logo />
        <Navigation />
      </div>

      <WelcomeCard />

      <Featured /> */}
      {/* <PromotionalBanner /> */}
      {/* <HeroCarousel /> */}
      {/* <DefaultNavigation /> */}
      {/* root placeholder for the app, which we add components to using route data */}
      <div className="msil-container">
        {route && <Placeholder name="jss-main" rendering={route} />}
      </div>
    </>
  );
};

export default Layout;
