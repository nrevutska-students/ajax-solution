const axios = require('axios').default;
export async function getPeople(id){
    const response=await fetch(`https://swapi.dev/api/people/${id}/`);
    const data=await response.json();
    return data;

}