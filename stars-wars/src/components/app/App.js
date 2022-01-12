import Header from "../header/Header.js";
import Next from "../nextButton/Next.js";
import ItemDescription from "../description/ItemDescription.js";
import React, { useState, useEffect } from "react";
import getData from "../../services/sw-service.js";
import { getImageUrl, entities } from "../../utils.js";

function App() {
  const [data, setData] = useState({});
  const [entity, setEntity] = useState(entities.keys().next().value);
  const [id, setId] = useState(1);
  const [imageUrl, setImgUrl] = useState(getImageUrl(entity, id));

  useEffect(() => {
    (async () => {
      const data = await getData(entity, id);      
      setImgUrl(getImageUrl(entity, id));
      setData(data);
    })()
  }, [id, entity]);

  function nextObj() {
    setId(value => value + 1);
  }

  function switchEntities(entity) {
    setEntity(entity);
  }

  return (
    <div className="app">
      <Header switchEntities={switchEntities} />
      <Next next={nextObj} />
      <ItemDescription imgUrl={imageUrl} data={data} />
    </div>
  );
}

export default App;
