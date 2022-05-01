import React, { useEffect, useState } from "react";
import Link from "next/link";
import jsCookie from "js-cookie";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
export default function Auth() {
  const [isLogin, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter();
  useEffect(() => {
    const token = jsCookie.get("token");
    if (token) {
      const jwToken = atob(token);
      const payload = jwtDecode(jwToken);
      const userData = payload.player;
      //const avatar = `${process.env.NEXT_PUBLIC_IMAGE}${userData.avatar}`
      setLogin(true);
    }
  }, []);

  const onLogout = () => {
    jsCookie.remove("token");
    router.push("/sign-in");
    setLogin(false);
  };

  if (isLogin) {
    return (
      <>
        <li className="nav-item my-auto dropdown d-flex">
          <div className="vertical-line d-lg-block d-none"></div>
          <div>
            <a
              className="dropdown-toggle ms-lg-40"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/img/avatar-1.png"
                className="rounded-circle"
                width="40"
                height="40"
                alt=""
              />
            </a>

            <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link href={"/member/overview"}>
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    My Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/member"}>
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    Wallet
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/member/edit-profile"}>
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    Account Settings
                  </a>
                </Link>
              </li>
              <li onClick={onLogout}>
                <Link href={"#"}>
                  <a className="dropdown-item text-lg color-palette-2" href="#">
                    Log Out
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className="nav-item my-auto">
          <Link href={"/sign-in"}>
            <a
              className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
              role="button"
            >
              Sign In
            </a>
          </Link>
        </li>
      </>
    );
  }
}
