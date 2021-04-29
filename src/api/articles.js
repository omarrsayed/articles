import { handleResponse, handleError, BASE_URL } from "./utils.js";

const ENDPOINT = BASE_URL + "/articles";

export function getAll() {
  return fetch(ENDPOINT).then(handleResponse).catch(handleError);
}
