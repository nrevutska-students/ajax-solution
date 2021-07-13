import Header from "../header/Header.js";
import Next from "../nextButton/Next.js";
import ItemDescription from "../description/ItemDescription.js";
import React, { useState, useEffect } from "react";
import { getPeople } from "../../services/sw-service.js";

function App() {
  const [imageUrl, setImgUrl] = useState("");
  const [data, setData] = useState({});
  const [id, setId] = useState(1);

  useEffect(async () => {
    const data = await getPeople(id);
    console.log(data);
    setImgUrl(
      `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    );
    setData(data.data);
  }, [id]);

  function nextObj() {
    setId(id + 1);
    setImgUrl(
      `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    );
  }

  return (
    <div className="app">
      <Header />
      <Next next={nextObj} />
      <ItemDescription
        imgUrl={imageUrl}
        name={data.name}
        gender={data.gender}
        birth_year={data.birth_year}
        eye_color={data.eye_color}
        description
      />
    </div>
  );
}

export default App;
