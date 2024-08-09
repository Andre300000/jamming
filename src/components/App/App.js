// src/App.js
import React, { useState } from 'react';
import TrackList from '../Tracklist/TrackList.js';
import './App.css';

const App = () => {
  // Hard-coded array of track objects
  const [tracks] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
  ]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <TrackList tracks={tracks} />
    </div>
  );
};

export default App;