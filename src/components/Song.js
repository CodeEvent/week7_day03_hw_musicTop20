import React from 'react';


const Song = ({title, artist, position}) => {

    return (
        <div>
        
        <h3>Position: {position}</h3>
        <hr></hr>
        <h4>Title: {title}</h4>
        <h4>Artist: {artist}</h4>
        <hr></hr>
        </div>    
    ) 
        

}

export default Song;