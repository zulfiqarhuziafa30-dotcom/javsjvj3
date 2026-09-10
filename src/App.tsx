/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { OurProcess } from './pages/OurProcess';
import { Blog } from './pages/Blog';
import { Careers } from './pages/Careers';
import { PageTransition } from './components/PageTransition';

function AppRoutes() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <PageTransition><Home /></PageTransition>
          } />
          <Route path="services" element={
            <PageTransition><Services /></PageTransition>
          } />
          <Route path="our-process" element={
            <PageTransition><OurProcess /></PageTransition>
          } />
          <Route path="blog" element={
            <PageTransition><Blog /></PageTransition>
          } />
          <Route path="careers" element={
            <PageTransition><Careers /></PageTransition>
          } />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
