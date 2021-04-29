import { handleResponse, handleError, BASE_URL } from "./utils.js";

const ENDPOINT = BASE_URL + "/users";
const LOGIN_ENDPOINT = BASE_URL + "/login";
const REGISTER_ENDPOINT = BASE_URL + "/register";
const POST = "POST";
const CONTENT_TYPE = "content-type";
const APPLICATION_JSON_CONTENT_TYPE = "application/json";

export function getAll() {
  return fetch(ENDPOINT).then(handleResponse).catch(handleError);
}

export function login(user) {
  const init = {
    method: POST,
    headers: { [CONTENT_TYPE] : APPLICATION_JSON_CONTENT_TYPE },
    body: JSON.stringify(user),
  };
  return fetch(LOGIN_ENDPOINT, init).then(handleResponse).catch(handleError);
}

export function register(user) {
  const init = {
    method: POST,
    headers: { [CONTENT_TYPE] : APPLICATION_JSON_CONTENT_TYPE },
    body: JSON.stringify(user),
  };
  return fetch(REGISTER_ENDPOINT, init).then(handleResponse).catch(handleError);
}