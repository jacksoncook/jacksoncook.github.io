import chewflocka from './images/album_cover_chewflocka.jpg';
import './App.css';
import ListOfLinks from './components/ListOfLinks.js';
import Album from './components/Album.js';
import * as constants from './Constants.js';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

function App() {
const [modalVisible, setModalVisible] = useState(false);
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
      <div id="Content" className="App-split">
        Content Links
      </div>
      <div id="links" className="App-contentbar">
        <ListOfLinks list={constants.STREAMING_PLATFORMS} title="Streaming Platforms" />
        <ListOfLinks list={constants.TENNIS_VIDEOS} title="Tennis Videos" />
        <ListOfLinks list={constants.WRITTEN_PIECES} title="Written Pieces" />
        <ListOfLinks list={constants.SOCIAL_MEDIA} title="Social Media" />
      </div>
      <div id="Lyrics" className="App-split">
        Songs
      </div>
      <div id="albums" className="App-contentbar">
        <Album list={constants.SONG_LYRICS} />
      </div>
    </div>
  );
}

export default App;
