import { fetchWrapper } from "@/utils/fetchWrapper";

export const exampleFindAll = async (
  body: Object
): Promise<Object> => {

  // création de l'url => http://localhost:5173/example
  // const url = `${process.env.API_ENDPOINT}`;
  const url = "http://localhost:5173/example";


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

const exampleHook = {
    exampleFindAll,
};
  
export default exampleHook;