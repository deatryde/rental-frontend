import React from 'react';
import { createRoot } from 'react-dom/client';
import MainLayout from './layout/MainLayout';

const App = () => <MainLayout />

const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App />);
