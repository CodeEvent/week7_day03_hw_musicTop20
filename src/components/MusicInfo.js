import React from 'react';

const MusicInfo = () => {
    <div>
      {songs.map((song) => {
      return (
        <Song
          key={song.id.attributes["im:id"]}
          title={song['im:name'].label}
          artist={song['im:artist'].label}
        />
      )
    })}
    </div>
}

export default MusicInfo;