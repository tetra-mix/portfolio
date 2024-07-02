import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Title } from '../components/Title';
export const Home: React.FC = () => {

  return (
    <>
      <Header />
        <Title title='Who am I ?'/>
        <div>
          I'm a developer.
        </div>
      <Footer />
    </>
  );
};
