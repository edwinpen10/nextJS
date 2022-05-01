import callAPI from "../config";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function getMemberOverview() {
  const URL = `${ROOT_API}/${API_VERSION}/players/dashboard`;
  return callAPI({
    url: URL,
    method: "GET",
    token: true,
  });
}

export async function getMemberTransactions(val) {
    let params = '';
    if(val === 'all'){
        params =''
    }else{
        params = `?status=${val}`
    }
  const url = `${ROOT_API}/${API_VERSION}/players/history${params}`;
  return callAPI({
    url: url,
    method: "GET",
    token: true,
  });
}

export async function getTransactionsDetail(id, token) {
  const url = `${ROOT_API}/${API_VERSION}/players/history/${id}/detail`;
  return callAPI({
    url: url,
    method: "GET",
    serverToken: token,
  });
}

export async function updataProfile(id, data) {
  const url = `${ROOT_API}/${API_VERSION}/players/profile/${id}`;
  return callAPI({
    url: url,
    method: "PUT",
    data:data,
    token: true,
  });
}

