import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [birthdayData, setBirthdayData] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>{birthdayData.length} Birthday Today</h3>
        <List birthdayData={birthdayData} />
        <button
          onClick={() => {
            setBirthdayData([]);
          }}
        >
          Clear All
        </button>
      </div>
    </main>
  );
}

export default App;
