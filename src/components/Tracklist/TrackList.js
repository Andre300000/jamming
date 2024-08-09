// src/TrackList.js
import React from 'react';
import Track from '../Track/Track';


const TrackList = (props) => {
  return (
    <div className="Tracklist">
      {props.tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackList;