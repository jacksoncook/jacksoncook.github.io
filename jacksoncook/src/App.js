import chewflocka from './chewflocka.png';
import './App.css';
import ListOfLinks from './ListOfLinks.js';
import * as constants from './Constants.js';

function App() {
  return (
    <div className="App">
      <div className="HorizontalContent">
          <div>
            <img src={chewflocka} className="App-logo" alt="photo_of_jackson" />
          </div>
          <div>
            <p>
            Welcome to Jacksonian's personal site.
            From this port you can quickly browse many things Jacksonian enjoys.
            </p>
          </div>
        </div>
        <div className="HorizontalContent">
          <ListOfLinks list={constants.STREAMING_PLATFORMS} title="Streaming Platforms" />
          <ListOfLinks list={constants.TENNIS_VIDEOS} title="Tennis Videos" />
        </div>
    </div>
  );
}

export default App;
