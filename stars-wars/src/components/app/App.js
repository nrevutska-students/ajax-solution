import Header from "../header/Header.js";
import Next from "../nextButton/Next.js";
import ItemDescription from "../description/ItemDescription.js";
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { getPeople ,getPlanets,getStarhips,getData} from "../../services/sw-service.js";
=======
import React, { useState, useEffect } from "react";
import { getPeople } from "../../services/sw-service.js";

>>>>>>> d93fc0b22e0ecabd120e265aceb68967754348f5
function App() {
  
  const [imageUrl, setImgUrl] = useState("https://starwars-visualguide.com/assets/img/characters/1.jpg");
  const [data, setData] = useState({});
  const [flag, setFlag] = useState("characters");//planets,//starships //characters
  const [id, setId] = useState(1);

  useEffect(async () => {
   const data=await getData(id,flag)
   setImgUrl(`https://starwars-visualguide.com/assets/img/${flag}/${id}.jpg`);
   setData(data)
  },[id,flag]);
  function nextObj(){
    setId(id+1);
    setImgUrl(`https://starwars-visualguide.com/assets/img/${flag}/${id}.jpg`);
    }
    function switchFlags(flag){
      setFlag(flag)
      if(flag==='starships')
      setId(21); else setId(1)

    }
  return (
    <div className="app">
     <Header switchFlags={switchFlags}/>
     <Next next={nextObj}/>
     <ItemDescription imgUrl={imageUrl} data={data}/>
    </div>
  );
}

export default App;
