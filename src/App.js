import './App.css';
import Home from "./pages/HomePage/Home";
import EmployeePage from './pages/EmployeePage/Bank-Employee';
import ClientPage from './pages/ClientPage/ClientPage';
import NotFound from "./pages/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
             <Route index element={<Home></Home>}></Route>
             <Route path='employee' element={<EmployeePage></EmployeePage>}></Route>
             <Route path='client' element={<ClientPage></ClientPage>}></Route>
             <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
