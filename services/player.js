import axios from "axios";
import callAPI from "../config";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";
export async function getFeaturedGame() {
  const URL = "players/landingpage";
  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
}

export async function getDetailVoucher(id) {
  const URL = `players/${id}/detail`;
  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
}

export async function getGameCategory() {
  const URL = `players/category`;
  const res = await axios.get(`${ROOT_API}/${API_VERSION}/${URL}`);
  const axiosResponse = res.data;

  return axiosResponse.data;
}

export async function setCheckout(data) {
  const URL = `${ROOT_API}/${API_VERSION}/players/checkout`;

  return callAPI({
    url: URL,
    method: "POST",
    data: data,
    token:true
  });
}


