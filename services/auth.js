import callAPI from "../config";
const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";
export async function setSignUp(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;
  return callAPI({
    url:url,
    method:'POST',
    data:data
  })
}

export async function setSignIn(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;  
  return callAPI({
    url:url,
    method:'POST',
    data:data
  })
}
