import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import { Header } from './Header/Header';
import { HomePage } from "./Pages/HomePage";


const Movies = lazy(() => import('./Pages/MoviesPage'));
const NotFound = lazy(() => import('./Pages/NotFound'));




export function App () {
  return <>
    <Routes>
      <Route path='/' element={<Header />}>;
        <Route index element={<HomePage />}/>;
        <Route path='movie' element={<Movies />}/>;
        <Route path='*' element={<NotFound />}/>;
      </Route>
    </Routes> 
  </>
    
}
