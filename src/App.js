import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Doctors from './components/Doctor';
import Revenue from './components/revenue';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/TDM" element={<Doctors />} />
            <Route path="/revenue" element={<Revenue />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;