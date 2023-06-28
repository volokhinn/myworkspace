import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import styles from './scss/index.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
