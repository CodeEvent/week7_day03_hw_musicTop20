import React from 'react';
import Song from './Song';



const MusicList = ({song}) => {

    const songList = song.map((song, index) => {
      return (<Song 
      key={song.id.attributes["im:id"]}
      position={index + 1}
      title={song['im:name'].label}
      artist={song['im:artist'].label}

    />
  )
})

  return (
    <div>
    <ul>
      {songList}
    </ul>
  </div>
  )
}
export default MusicList;