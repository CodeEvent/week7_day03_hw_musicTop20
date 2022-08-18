import React from 'react';


const Song = ({title, artist, position}) => {

    return (
        <div>
        
        <p><>Position: </>{position}</p>
        <hr></hr>
        <p><>Title: </>{title}</p>
        <p><>Artist: </>{artist}</p>
        <hr></hr>
        </div>    
    ) 
        

}

export default Song;