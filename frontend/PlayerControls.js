import React from 'react';
import axios from 'axios';

const PlayerControls = ({ trackId }) => {
    const handleControl = async (action) => {
        const response = await axios.post(`/api/music/${action}`, { trackId });
        alert(response.data.message);
    };

    return (
        <div>
            <button onClick={() => handleControl('play')}>Play</button>
            <button onClick={() => handleControl('pause')}>Pause</button>
            <button onClick={() => handleControl('stop')}>Stop</button>
            <button onClick={() => handleControl('like')}>Like</button>
            <button onClick={() => handleControl('dislike')}>Dislike</button>
            <button onClick={() => handleControl('add-to-playlist')}>Add to Playlist</button>
        </div>
    );
};

export default PlayerControls;
