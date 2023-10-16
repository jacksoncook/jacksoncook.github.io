import './Album.css';
import ReactModal from 'react-modal';
import React, { useState } from 'react';

export default function Album(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [songTitle, setSongTitle] = useState("");
  const [songLyrics, setSongLyrics] = useState("");
  function modalItUp(event, title, lyrics) {
    event.preventDefault();
    setModalVisible(true);
    setSongTitle(title);
    setSongLyrics(lyrics);
  }
  return (
    <div className="Album-container">
        {props.list.map((item, i) =>
          <div id={i} className="Album-album">
            <a href="https://github.com" onClick={(event)=>{modalItUp(event, item.title, item.lyrics)}}>
              <img src={item.album_cover_path} className="Album-image" alt="photo_of_jackson" />
            </a>

          </div>
         )}  
            <ReactModal id="modal" isOpen={modalVisible} onRequestClose={(event)=>{setModalVisible(false);}}>{songTitle}</ReactModal>
    </div>
  )
};
