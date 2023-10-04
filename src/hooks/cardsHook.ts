import { fetchWrapper } from "@/utils/fetchWrapper";

export const findAllCards = async (
  body: Object
): Promise<Object> => {

  // création de l'url => http://localhost:5173/example
  const url = "https://api.pokemontcg.io/v2/cards/";

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

export const findOneCard = async (
    id: number,
    body: Object
  ): Promise<Object> => {
  
    // création de l'url => http://localhost:5173/example
    const url = `https://api.pokemontcg.io/v2/cards/${id}`;
  
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

const cardsHook = {
    findAllCards,
    findOneCard
};
  
export default cardsHook;