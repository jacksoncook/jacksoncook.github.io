import chewflocka from './chewflocka.png';
import './App.css';
import ListOfLinks from './ListOfLinks.js';
import * as constants from './Constants.js';

function App() {
  return (
    <div className="App">
      <div id="welcome" className="App-contentbar">
        <div>
          <img src={chewflocka} className="App-logo" alt="photo_of_jackson" />
        </div>
        <div className="App-text">
          <div className="App-statement">
            Ahoy!
            <br />
            From this port you can quickly browse many things Jacksonian enjoys...
          </div>
        </div>
      </div>
      <div className="App-split">
        Content Links
      </div>
      <div id="links" className="App-contentbar">
        <ListOfLinks list={constants.STREAMING_PLATFORMS} title="Streaming Platforms" />
        <ListOfLinks list={constants.TENNIS_VIDEOS} title="Tennis Videos" />
        <ListOfLinks list={constants.WRITTEN_PIECES} title="Written Pieces" />
      </div>
      <div className="App-contentbar">
      </div>
    </div>
  );
}

export default App;
