import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppService from '../../src/routes';
import Loader from '../common/Loader';
import SafeComponent from '../common/SafeComponent';
import UiLayout from './UiLayout';

const MainLayout = () => {
  return (
    <BrowserRouter basename={``}>
      <UiLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/*"
              element={
                <SafeComponent>
                  <AppService />
                </SafeComponent>
              }
            />
          </Routes>
        </Suspense>
      </UiLayout>
    </BrowserRouter>
  );
};

export default MainLayout;
