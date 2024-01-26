import '../../styles/vars.css'
import Card from '../Card/Card';
import './Playlist.css'

import React, { useState, useEffect } from 'react';

const Playlist = ({ searchTerm  }) => {
  const [showPlaylist, setShowPlaylist] = useState(true);
  const [result, setResult] = useState([]);
  const [artistName, setArtistName] = useState('');
  const [artistImageSrc, setArtistImageSrc] = useState('');

  useEffect(() => {
    const searchApi = async () => {
      try {
        if (searchTerm === '') {
          setShowPlaylist(true);
          setResult([]);
          return;
        }

        console.log('Termo de pesquisa:', searchTerm);
        const url = `http://localhost:3001/artists?name_like=${searchTerm}`;
        const response = await fetch(url);
        const data = await response.json();

        console.log('Resposta da API:', data);
        setResult(data);
        displayResults(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    const displayResults = (result) => {
      console.log(result);
      if (result.length > 0) {
        const { name, urlImg } = result[0];
        setArtistName(name);
        setArtistImageSrc(urlImg);
        setShowPlaylist(false);
      } else {
        setShowPlaylist(true);
      }
    };

    searchApi();
  }, [searchTerm]);

  const displayResults = (result) => {
    console.log(result);
    if (result.length > 0) {
      const { name, urlImg } = result[0];
      setArtistName(name);
      setArtistImageSrc(urlImg);
    }
  };

  return (
    <div className="playlist-container">
        {showPlaylist ? (
        <div id="result-playlists">
          <div className="playlist">
            <h1 id="greeting">Boas vindas</h1>
            <h2 className="session">Navegar por todas as seções</h2>
          </div>

          <div className="offer__scroll-container">
            <div className="offer__list">
              <section className="offer__list-item">
                <Card />
              </section>
            </div>
          </div>
        </div>
      ) : (
        <div id="result-artist">
          <div className="grid-container">
            <div className="artist-card">
              {result.length > 0 && (
                <>
                  <div className="card-img">
                    <img
                      id="artist-img"
                      className="artist-img"
                      src={artistImageSrc}
                      alt={artistName}
                    />
                    <div className="play">
                      <span className="fa fa-solid fa-play"></span>
                    </div>
                  </div>
                  <div className="card-text">
                      <span className="artist-name">{artistName}</span>
                      <span className="artist-categorie">Artista</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Playlist;