import axios from "axios";
export async function getPeople(id){
    const response=await axios.get(`https://swapi.dev/api/people/${id}/`);
    //const data=await response.json();
    return {
         name:response.data.name,
            gender:response.data.gender,
            birth_year:response.data.birth_year,
            eye_color:response.data.eye_color

           
         };

}
export async function getPlanets(id){
    const response=await axios.get(`https://swapi.dev/api/planets/${id}/`);
    //const data=await response.json();
    return {
            name:response.data.name,
            population:response.data.population,
            orbital_period:response.data.orbital_period,
            diameter:response.data.diameter

         };

}
export async function getStarhips(id){
    const response=await axios.get(`https://swapi.dev/api/starships/${id}/`);
    //const data=await response.json();
    return {
            name:response.data.name,
            model:response.data.model,
            manufacturer:response.data.manufacturer,
            cost_in_credits:response.data.cost_in_credits

         };

}
export async function getData(id,flag){
    switch (flag){
        case 'characters':return getPeople(id);
        case 'planets':return getPlanets(id);
        case 'starships':return getStarhips(id);
    }
    
}