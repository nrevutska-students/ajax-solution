import "./header.css"

<<<<<<< HEAD
export default function Header(props) {
=======
export default function Header() {
    
>>>>>>> d93fc0b22e0ecabd120e265aceb68967754348f5
    return (
        <div className="header">
            <div className="nav">
              <li onClick={()=>props.switchFlags("characters")} className="navItem">People</li>
              <li onClick={()=>props.switchFlags("planets")} className="navItem">Planets</li>
              <li onClick={()=>props.switchFlags("starships")} className="navItem">Starships</li>
            </div>
        </div>
    )
}
