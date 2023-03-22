import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Body from './components/body';
import Carta from './components/carta/carta';

const routes = (
  <Routes>
    <Route exact path="/" element={<Body />} />
    <Route path="/carta" element={<Carta tipo = "carta"/>} />
    <Route path="/entrantes" element={<Carta tipo = "entrante"/>} />
    <Route path="/postres" element={<Carta tipo = "postre"/>} />
    <Route path="/pastas" element={<Carta tipo = "pasta"/>} />
    <Route path="/pizzas" element={<Carta tipo = "pizza"/>} />
  </Routes>
);

export { routes };