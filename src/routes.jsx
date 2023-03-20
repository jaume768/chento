import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Body from './components/body';
import Carta from './components/carta/carta';

const routes = (
  <Routes>
    <Route exact path="/" element={<Body />} />
    <Route path="/carta" element={<Carta />} />
  </Routes>
);

export { routes };