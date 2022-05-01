import axios from "axios";
import jsCookie from "js-cookie";
export default async function  callAPI({url, method, data, token, serverToken}){
    let headers ={}
  if(serverToken){
    headers ={
      Authorization:`Bearer ${serverToken}`
    }
  }
  else if (token) {
    const tokenCookies = jsCookie.get("token");
    if(tokenCookies){
      const jwToken = atob(tokenCookies);
      headers ={
        Authorization:`Bearer ${jwToken}`
      }
    }
  }
  
  const res = await axios({
    url: url,
    method: method,
    data: data,
    headers:headers
  }).catch((err) => err.response);

  if (res.status > 300) {
    const resp = {
      error: true,
      message: res.data.message,
      data: null,
    };
    return resp;
  }
  
  const length = Object.keys(res.data).length

  const resp = {
    error: false,
    message: "success",
    data: length>1 ? res.data : res.data.data,
  };

  return resp;
}
