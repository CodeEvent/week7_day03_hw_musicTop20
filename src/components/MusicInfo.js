import React from 'react';

const MusicInfo = () => {
    <div>
      {songs.map((song, index) => {
      return (
        <Song
          key={song.id.attributes["im:id"]}
          position={index + 1}
          title={song['im:name'].label}
          artist={song['im:artist'].label}
        />
      )
    })}
    </div>
}

export default MusicInfo;