import "./itemDescription.css";

export default function ItemDescription({ data, imgUrl }) {
  let arrayDate = Object.entries(data);
  arrayDate.splice(0, 1);

  return (
    <div className="itemDescription">
      <img className="itemImage" src={imgUrl} alt={data.name} />
      <h3>{data.name}</h3>
      <ul>
        {arrayDate.map((element) => {
          return (
            <li key={element[0]} className="descItem">
              {element[0]} : {element[1]}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
