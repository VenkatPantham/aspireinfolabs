import axios from "axios";
import { BASE_URL } from "../../../../shared/constants/api.const";
import { authHeader } from "./../../shared/utils/API/authHeader";

export const userService = {
  login,
  logout,
  add,
  getAll,
  getById,
  update,
  delete: _delete,
};

async function login(username, password) {
  const requestBody = { username, password };
  const response = await axios.post(`${BASE_URL}/admin/login`, requestBody, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleResponse(response);
}

function logout() {
  // remove user from local storage to log user out
  sessionStorage.removeItem("user");
}

async function getAll() {
  const requestOptions = {
    headers: authHeader(),
  };
  const response = await axios.get(`${BASE_URL}/users`, requestOptions);
  return handleResponse(response);
}

async function getById(id) {
  const requestOptions = {
    headers: authHeader(),
  };
  const response = await axios.get(`${BASE_URL}/users/${id}`, requestOptions);
  return handleResponse(response);
}

async function add(user) {
  const requestBody = user;
  const response = await axios.post(`${BASE_URL}/users/add`, requestBody);
  return handleResponse(response);
}

async function update(user) {
  const requestBody = user;
  const requestOptions = {
    headers: { ...authHeader(), "Content-Type": "application/json" },
  };
  const response = await axios.put(
    `${BASE_URL}/users/${user.id}`,
    requestBody,
    requestOptions
  );
  return handleResponse(response);
}

// prefixed function name with underscore because delete is a reserved word in javascript
async function _delete(id) {
  const requestOptions = {
    headers: authHeader(),
  };
  const response = await axios.delete(
    `${BASE_URL}/users/${id}`,
    requestOptions
  );
  return handleResponse(response);
}

function handleResponse(response) {
  if (response.status !== 200) {
    if (response.status === 401) {
      // auto logout if 401 response returned from api
      logout();
      Location.reload(true);
    }
    return Promise.reject(response.statusText);
  }
  return response;
}
