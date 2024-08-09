
import React from 'react';


const Track = (props) => {
  return (
    <div className="Track">
      <h2>{props.track.name}</h2>
      <p>{props.track.artist}</p>
      <p>{props.track.album}</p>
    </div>
  );
};

export default Track;