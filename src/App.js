import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoutes';
import Login from './components/Login'
import Overview from './components/Overview'
import Video from './components/Video'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/overview"  element={<Overview />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/video/*"  element={<Video />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
