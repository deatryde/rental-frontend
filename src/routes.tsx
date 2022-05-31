import React from 'react';
import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { store } from './redux/store';
import Header from './common/Header';
import Signin from './auth/signin';
import SignUp from './auth/signup';
import SignOut from './auth/signout';
import HomePage from './components/HomePage';

const AppService = () => {
  const routes = useRoutes([
    {
      path: 'home',
      element: <HomePage />,
    },
    {
      path: 'signin',
      element: <Signin />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
    {
      path: 'signout',
      element: (
        <>
          <Header />
          <SignOut />
        </>
      ),
    },
  ]);
  return <Provider store={store}>{routes}</Provider>;
};

export default AppService;
