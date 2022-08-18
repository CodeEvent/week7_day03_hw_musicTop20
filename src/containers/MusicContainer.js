import { useState, useEffect } from "react";
import MusicList from "../components/MusicList";




const MusicContainer = () => {
    const [song, setSong] = useState([]);

    useEffect(() => {
        songList()
    }, [])

    const songList = function (){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(result => result.json())
        .then(data => setSong(data.feed.entry))
      }




    return (
        <div>
       
            <p>Thi is the Top20 Chart from Itunes</p>
            <MusicList song={song} />
            
        
        </div>
    )
}

export default MusicContainer;