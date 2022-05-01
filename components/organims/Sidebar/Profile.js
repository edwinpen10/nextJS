import React, {useEffect, useState} from "react";
import jsCookie from "js-cookie";
import jwtDecode from "jwt-decode";

export default function ProfileSidebar(){
  const [user, setUser] = useState({});
  useEffect(() => {
    const token = jsCookie.get("token");
    if (token) {
      const jwToken = atob(token);
      const payload = jwtDecode(jwToken);
      const userData = payload.player;
      //const avatar = `${process.env.NEXT_PUBLIC_IMAGE}${userData.avatar}`
      setUser(userData)
    }
  }, []);
    return (
        <>
        <div className="user text-center pb-50 pe-30">
            <img
              src="/img/avatar-1.png"
              width="90"
              height="90"
              className="img-fluid mb-20"
            />
            <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
            <p className="color-palette-2 m-0">{user.email}</p>
          </div>
        </>
    )
}