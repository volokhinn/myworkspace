import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Balance from './pages/Balance';
import BlackList from './pages/BlackList';
import Notes from './pages/Notes';
import Staff from './pages/Staff/Staff';
import StaffProfile from './pages/StaffProfile';
import styles from './scss/index.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="balance" element={<Balance />} />
          <Route path="events" element={<Events />} />
          <Route path="blacklist" element={<BlackList />} />
          <Route path="notes" element={<Notes />} />
          <Route path="staff" element={<Staff />} />
          <Route path="staff/profile" element={<StaffProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
