import axios from "axios";
import { BASE_URL } from "../../../../../shared/constants/api.const";
import { authHeader } from "../../../shared/utils/API/authHeader";

export const settingsService = {
  fetchMails,
  addMail,
  editMail,
  deleteMail,
};

async function fetchMails() {
  const requestOptions = {
    headers: authHeader(),
  };
  return await axios.get(
    `${BASE_URL}/admin/mail/adminEMailIds`,
    requestOptions
  );
}

async function addMail(data) {
  const requestOptions = {
    headers: authHeader(),
  };
  requestOptions.headers["Content-Type"] = "application/json";
  return await axios.post(
    `${BASE_URL}/admin/mail/adminEMailIds`,
    data,
    requestOptions
  );
}

async function editMail(data) {
  const requestOptions = {
    headers: authHeader(),
  };
  requestOptions.headers["Content-Type"] = "application/json";
  return await axios.put(
    `${BASE_URL}/admin/mail/adminEMailIds?id=${data.id}`,
    data,
    requestOptions
  );
}

async function deleteMail(id) {
  const requestOptions = {
    headers: authHeader(),
  };
  return await axios.delete(
    `${BASE_URL}/admin/mail/adminEMailIds?id=${id}`,
    requestOptions
  );
}
