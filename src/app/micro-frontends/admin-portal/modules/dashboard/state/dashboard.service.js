import axios from "axios";
import { BASE_URL } from "../../../../../shared/constants/api.const";
import { authHeader } from "../../../shared/utils/API/authHeader";

export const dashboardService = {
  fetchDashboard,
  changeStatus,
};

async function fetchDashboard(type) {
  const requestOptions = {
    headers: authHeader(),
  };
  return await axios.get(
    `${BASE_URL}/admin/query/${type}Query`,
    requestOptions
  );
}

async function changeStatus(type, id, status) {
  const requestOptions = {
    headers: authHeader(),
  };
  return await axios.put(
    `${BASE_URL}/admin/query/${type}Query/updateStatus?id=${id}&status=${status}`,
    null,
    requestOptions
  );
}
