import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import { useReducer } from 'react';

import HomePage from './pages/home';
import ProductsPage from './pages/products';
import DetailsPage from './pages/detail';
import ShopcartPage from './pages/shopcart';
import CheckoutPage from './pages/checkout';
import { GlobalContext } from './services/context';
import { initialState } from './state/initial_state';
import { themeReducer } from './reducers/theme_reducer';


function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{state, dispatch}}>
      <Routes>
        <Route path="" element={ <HomePage /> }></Route>
        <Route path="/products/:id" element={ <ProductsPage /> }></Route>
        <Route path="/detail/:id" element={ <DetailsPage /> }></Route>
        <Route path="shopcart" element={ <ShopcartPage /> }></Route>
        <Route path="checkout" element={ <CheckoutPage /> }></Route>
      </Routes>
    </GlobalContext.Provider>
  </BrowserRouter>
  );
}

export default App;
