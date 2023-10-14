import chewflocka from './chewflocka.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chewflocka} className="App-logo" alt="photo_of_jackson" />
        <p>
          Jacksonian
        </p>
        <a
          className="App-link"
          href="https://open.spotify.com/artist/6q9PvW3q4He4W8ViZFLtjT?si=wOekEuO8QEyMOTlzU-6hbw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </a>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCSOKARALDelvhq8Oxg1URCw/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
        <a
          className="App-link"
          href="https://music.apple.com/us/artist/jacksonian/1681131702"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apple Music
        </a>
        <a
          className="App-link"
          href="https://www.amazon.com/music/player/artists/B0C1S65ZL7/jacksonian"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amazon Music
        </a>
      </header>
    </div>
  );
}

export default App;
