import React from 'react';
import Header from '../common/Header';
import CreateRental from './createRental';

const HomePage = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      <Header />
      <CreateRental />
      <h1>HOME</h1>
    </div>
  );
};

export default HomePage;
