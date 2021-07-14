import "./header.css";

export default function Header(props) {
  return (
    <div className="header">
      <div className="nav">
        <li onClick={() => props.switchFlags("characters")} className="navItem">
          People
        </li>
        <li onClick={() => props.switchFlags("planets")} className="navItem">
          Planets
        </li>
        <li onClick={() => props.switchFlags("starships")} className="navItem">
          Starships
        </li>
      </div>
    </div>
  );
}
