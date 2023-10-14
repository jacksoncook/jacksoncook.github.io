import './ListOfLinks.css';
export default function ListOfLinks(props) {
    return (
        <div className="ListOfLinks-container">
            <p>
                {props.title}
            </p>
            <ul className="PlainList"> 
            {props.list.map((item, i) =>
                <li key={i}>
                  <a  
                    className="App-link"
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {item.name}
                  </a>
                </li>
                )}
            </ul>
        </div>
    )
};
