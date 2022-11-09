import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProjectListing from './Components/ProjectList/PeojectListing';
import PeojectCreate from './Components/ProjectCreate/PeojectCreate';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import ProjectEdit from './Components/ProjectEdit/ProjectEdit';
import Logn from './Components/Login/Logn';

function App() {

  const [logoutUser, setLogoutUser] = useState(false);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Logn setLogoutUser={setLogoutUser}/>}></Route>
          <Route path='/projec/liststing' element={<ProjectListing />}></Route>
          <Route path='/project/create' element={<PeojectCreate />}></Route>

          <Route path='/project/detail/:proid' element={<ProjectDetail />}></Route>
          <Route path='/project/edit/:proid' element={<ProjectEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
