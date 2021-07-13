import axios from "axios";

export async function getPeople(id) {
  const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
  //const data=await response.json();

  return response;
}
