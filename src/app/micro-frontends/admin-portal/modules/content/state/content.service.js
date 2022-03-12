import axios from "axios";
import { BASE_URL } from "../../../../../shared/constants/api.const";
import { authHeader } from "../../../shared/utils/API/authHeader";

export const contentService = {
  fetchContent,
  postContent,
  editContent,
  deleteContent,
};

async function fetchContent() {
  const requestOptions = {
    headers: authHeader(),
  };
  return await axios.get(
    `${BASE_URL}/admin/content/publication`,
    requestOptions
  );
}

async function postContent(formData) {
  const requestOptions = {
    headers: authHeader(),
  };
  requestOptions.headers["Content-Type"] = "multipart/form-data";
  return await axios.post(
    `${BASE_URL}/admin/content/publication`,
    formData,
    requestOptions
  );
}

async function editContent(formData) {
  const requestOptions = {
    headers: authHeader(),
  };
  requestOptions.headers["Content-Type"] = "multipart/form-data";
  return await axios.put(
    `${BASE_URL}/admin/content/publication`,
    formData,
    requestOptions
  );
}

async function deleteContent(id) {
  const requestOptions = {
    headers: authHeader(),
  };
  return await axios.delete(
    `${BASE_URL}/admin/content/publication?id=${id}`,
    requestOptions
  );
}
