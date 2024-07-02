import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Title } from '../components/Title';
import { Form } from '../components/Form';
export const Contact: React.FC = () => {

  return (
    <>
      <Header />
        <Title title="Contact" />
        <Form />
      <Footer />
    </>
  );
};
