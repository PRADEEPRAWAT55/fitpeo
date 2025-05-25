import { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import styles from '../src/styles/App.module.css'; 

function App() {
  const [sidebarOpen] = useState(true); // Static state for layout

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainContainer}>
        <Sidebar isOpen={sidebarOpen} />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;