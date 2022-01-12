import { entities } from "../../utils";
import "./header.css";

export default function Header(props) {

  return (
    <div className="header">
      <ul className="nav">
        {Array.from(entities.keys()).map(key =>
          <li key={key} onClick={() => props.switchEntities(key)} className="navItem">
            {entities.get(key)}
          </li>)}        
      </ul>
    </div>
  );
}
