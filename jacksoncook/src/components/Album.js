import './Album.css';

export default function Album(props) {
  return (
    <div className="Album-container">
        {props.list.map((item, i) =>
          <div id={i} className="Album-album">
            <img src={item.album_cover_path} className="Album-image" alt="photo_of_jackson" />
          </div>
         )}  
    </div>
  )
};
