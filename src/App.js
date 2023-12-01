import React, { useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import Data from './data/db.json';
import Hero from './components/Hero';

const App = () => {
  let firstObjId = Data?.results[0].id;
  const [selectedId, setSelectedId] = useState(firstObjId);

  const getSelectedId = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="App">
      <Hero selectedId={selectedId} />
      <Movies title="NETFLIX ORIGINALS" isLargeRow onclick={getSelectedId} />
      <Movies title="Trending now" onclick={getSelectedId} />
    </div>
  );
};

export default App;
