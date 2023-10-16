import './ListOfLinks.css';
export default function ListOfLinks(props) {
  return (
    <div className="ListOfLinks-container">
      <p>
        {props.title}
      </p>
      <div className="ListOfLinks-list"> 
        {props.list.map((item, i) =>
          <div id={i} className="ListOfLinks-listitem">
            <a className="ListOfLinks-link" href={item.link} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </div>
         )}
       </div>
    </div>
  )
};
