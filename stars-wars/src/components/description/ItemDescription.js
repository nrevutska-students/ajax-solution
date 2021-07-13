import "./itemDescription.css"

export default function ItemDescription(props) {//{imgUrl,name,gender,description}
    
    return (
        <div className="itemDescription">
            <img className="itemImage" src={props.imgUrl}/>
            <h3>{props.name}</h3>
            <li className="descItem">Gender:{" "+props.gender}</li>
            <li className="descItem">Birth:{" "+props.birth_year}</li>
            <li className="descItem">Eye:{" "+props.eye_color}</li>
        </div>
    )
}
