import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Balance from './pages/Balance';
import BlackList from './pages/BlackList';
import Notes from './pages/Notes';
import Staff from './pages/Staff/Staff';
import StaffProfile from './pages/StaffProfile';
import AddStaff from './pages/Staff/AddStaff';
import styles from './scss/index.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchStaffs, clearFilter } from './redux/slices/staffSlice';
import { fetchNotes } from './redux/slices/noteSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchStaffs());
    dispatch(fetchNotes());
    dispatch(clearFilter());
  }, []);

  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="balance" element={<Balance />} />
          <Route path="events" element={<Events />} />
          <Route path="blacklist" element={<BlackList />} />
          <Route path="notes" element={<Notes />} />
          <Route path="staff" element={<Staff />} />
          <Route path="staff/add-staff" element={<AddStaff />} />
          <Route path="staff/profile/:id" element={<StaffProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
