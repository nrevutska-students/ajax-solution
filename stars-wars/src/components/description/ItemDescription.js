import "./itemDescription.css"

export default function ItemDescription(props) {//{imgUrl,name,gender,description}
    let arrayDate=Object.entries(props.data);
    arrayDate.splice(0,1)

    return (
        <div className="itemDescription">
            
            <img className="itemImage" src={props.imgUrl}/>
            <h3>{props.data.name}</h3>
            
            { 
           
           arrayDate.map(element=>{ 
               return <li className="descItem"> {element[0]} :  {element[1]}</li>
            })}
            
        </div>
    )
}
