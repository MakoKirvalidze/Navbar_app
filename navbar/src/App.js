import React from 'react';
import Navbar from './components/Navbar';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

function App() {
  const navItems = [
    { label: 'Home', icon: <HomeIcon />, onClick: () => alert('Home clicked!') },
    { label: 'About', icon: <InfoIcon />, onClick: () => alert('About clicked!') },
  ];

  return (
    <div>
      {/* Horizontal Navbar */}
      <Navbar orientation="horizontal" items={navItems} />

      {/* Vertical Navbar */}
      <Navbar orientation="vertical" items={navItems} style={{ backgroundColor: 'purple' }} />
    </div>
  );
}

export default App;
