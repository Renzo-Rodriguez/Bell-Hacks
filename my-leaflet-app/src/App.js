import React, { useState } from 'react';
import LeafletMap from './LeafletMap';
import './App.css';

const App = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (type) => {
    setHovered(type);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <LeafletMap />
      <div style={{ width: '50%', padding: '20px', borderLeft: '1px solid #ccc' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              ...textContainerStyle,
              background: hovered === 'high' ? 'linear-gradient(to right, #ff4e50, #f9d423)' : '',
            }}
            onMouseEnter={() => handleMouseEnter('high')}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text">High</p>
          </div>
          <div
            style={{
              ...textContainerStyle,
              background: hovered === 'med' ? 'linear-gradient(to right, #ff9505, #ffc837)' : '',
            }}
            onMouseEnter={() => handleMouseEnter('med')}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text">Med</p>
          </div>
          <div
            style={{
              ...textContainerStyle,
              background: hovered === 'low' ? 'linear-gradient(to right, #1e9600, #fff200)' : '',
            }}
            onMouseEnter={() => handleMouseEnter('low')}
            onMouseLeave={handleMouseLeave}
          >
            <p className="text">Low</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const textContainerStyle = {
  width: '300px',
  padding: '10px',
  margin: '5px',
  border: '1px solid #ccc',
  cursor: 'pointer',
  textAlign: 'center',
  fontSize: '50px',
  transition: 'background-color 0.3s ease',
};

export default App;
