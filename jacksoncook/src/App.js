import chewflocka from './chewflocka.png';
import './App.css';
import ListOfLinks from './ListOfLinks.js';

var tennisVideos = [
    {
        "name": "2023/07/31 Singles R128 1st Set",
        "link": "https://www.youtube.com/watch?v=SFmWbVKMc5A",
    },
    {
        "name": "2023/07/31 Singles R128 2nd Set",
        "link": "https://www.youtube.com/watch?v=qEF6g-4M0ok",
    },
    {
        "name": "2023/01/18 Singles Casual vs. 4.0",
        "link": "https://www.youtube.com/watch?v=PS-PEf6kgW4",
    },
    {
        "name": "2023/01/28 Singles (Pickleball)",
        "link": "https://www.youtube.com/watch?v=NXcOaojsPIk",
    },
    {
        "name": "2023/01/16 Doubles Casual",
        "link": "https://www.youtube.com/watch?v=PJTQmBBEY4A",
    },
]

var streamingPlatforms = [
    {
        "name": "Spotify",
        "link": "https://open.spotify.com/artist/6q9PvW3q4He4W8ViZFLtjT",
    },
    {
        "name": "Youtube",
        "link": "https://www.youtube.com/channel/UCSOKARALDelvhq8Oxg1URCw/featured",
    },
    {
        "name": "Apple Music",
        "link": "https://music.apple.com/us/artist/jacksonian/1681131702",
    },
    {
        "name": "Amazon Music",
        "link": "https://www.amazon.com/music/player/artists/B0C1S65ZL7/jacksonian",
    },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={chewflocka} className="App-logo" alt="photo_of_jackson" />
        <p>
          Jacksonian
        </p>
        <ListOfLinks list={streamingPlatforms} />
        <ListOfLinks list={tennisVideos} />
      </header>
    </div>
  );
}

export default App;
