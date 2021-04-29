import * as actionTypes from "./action-types";
import * as usersAPI from "../../api/users";

export function loginSuccess(token) {
  return { type: actionTypes.LOGIN_SUCCESS, token };
}

export function loginFailed(error) {
  throw error;
}

export function registerSuccess(token) {
  return { type: actionTypes.LOGIN_SUCCESS, token };
}

export function registerFailed(error) {
  throw error;
}

export function loadUsersSuccess(users) {
  return { type: actionTypes.LOAD_USERS_SUCCESS, users };
}

export function loadUsersFailed(error) {
  throw error;
}


export function loadUsers() {
  return function (dispatch) {
    return usersAPI
      .getAll()
      .then((users) => dispatch(loadUsersSuccess(users)))
      .catch((error) => loadUsersFailed(error));
  };
}

export function register(user) {
  return function (dispatch) {
    return usersAPI
      .register(user)
      .then((token) => dispatch(registerSuccess(token)))
      .catch((error) => registerFailed(error));
  };
}

export function login(user) {
  return function (dispatch) {
    return usersAPI
      .login(user)
      .then((token) => dispatch(loginSuccess(token)))
      .catch((error) => loginFailed(error));
  };
}
