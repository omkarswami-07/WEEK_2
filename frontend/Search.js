import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);

    const handleSearch = async () => {
        const response = await axios.get(`/api/music/search?name=${query}`);
        setTracks(response.data.tracks);
    };

    return (
        <div>
            <h2>Search Music</h2>
            <input type="text" placeholder="Search by name" onChange={(e) => setQuery(e.target.value)} />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {tracks.map((track) => (
                    <li key={track._id}>{track.name} by {track.artist}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
