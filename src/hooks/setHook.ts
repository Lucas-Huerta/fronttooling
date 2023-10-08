import { fetchWrapper } from "@/utils/fetchWrapper";

export const findAllSets = async (
  body: Object
): Promise<Object> => {

  const url = "https://api.pokemontcg.io/v2/sets/";
  

  // création des headers
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // création du body
  const raw = JSON.stringify(body);

  // création des options de la requête
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    body: raw,
  };

  // appel du wrapper pour exécuter la requête
  return fetchWrapper(url, requestOptions);
};

const setHook = {
    findAllSets,
};
  
export default setHook;