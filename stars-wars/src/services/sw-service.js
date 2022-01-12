import axios from "axios";
import { getDataUrl } from "../utils";

export async function getFormattedPersonInfo(data) {
  return {
    name: data.name,
    gender: data.gender,
    'birth year': data.birth_year,
    'eye color': data.eye_color,
  };
}

export async function getFormattedPlanetInfo(data) {
  return {
    name: data.name,
    population: data.population,
    'orbital period': data.orbital_period,
    diameter: data.diameter,
  };
}

export async function getFormattedStarhipInfo(data) {
  return {
    name: data.name,
    model: data.model,
    manufacturer: data.manufacturer,
    'cost in credits': data.cost_in_credits,
  };
}

export default async function getData(entity, id) {

  return axios.get(getDataUrl(entity, id))
    .then(({ data }) => {
      switch (entity) {
        case "characters":          
          return getFormattedPersonInfo(data);          
        case "planets":
          return getFormattedPlanetInfo(data);
        case "starships":
          return getFormattedStarhipInfo(data);
        default:
          return {}
      }
    }).catch(() => {
      return { name: 'not available' }
    });  
}
