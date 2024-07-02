import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Title } from '../components/Title';
export const Article: React.FC = () => {

  return (
    <>
      <Header />
        <Title title='Article'/>
      <Footer />
    </>
  );
};
