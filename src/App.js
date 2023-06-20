import React from 'react';
import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
  Outlet
} from 'react-router-dom';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, DrinksSpecialMenu, Auth } from './container';
import { Navbar } from './components';
import './App.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={
          <div>
          <Navbar />
          <Header />
          <AboutUs />
          <SpecialMenu />
          <Chef />
          <DrinksSpecialMenu />
          <FindUs />
          <Gallery />
          <Laurels />
          <Footer />
        </div>
      } />
      <Route path="login" element={<Auth/>} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Route>
  )
)

const App = () => {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
