import React from 'react';
import Content from './Content';
import Headers from './Headers';
import Pricing from './Pricing';
import Roadmap from './Roadmap';
import Team from './Team';
import Statistic from './Statistic';

const HomePage = () => {
  return (
    <>
      <Headers />
      <Content />
      <Roadmap />
      <Pricing />
      <Team />
      <Statistic />
    </>
  );
};

export default HomePage;
