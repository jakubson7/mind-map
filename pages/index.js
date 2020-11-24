import React from 'react';
import { RecoilRoot } from 'recoil';

import GlobalStyles from '../styles/GlobalStyles';
import { SimpleView, Text } from '../styles/Fragment';
import Navigation from '../components/Navigation';



const HomePage = () => (
  <RecoilRoot>
    <SimpleView>
      <Navigation page='/' />
      <Text>
        aplikacja służy do wsólnego tworzenia mapy wyśli i eydycji w czasie rzeczywistym
      </Text>
    </SimpleView>
    <GlobalStyles />
  </RecoilRoot>
);

export default HomePage;
