import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setSignIn } from "../../../services/auth";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";
import jsCookie from "js-cookie";
export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router= useRouter()
  const onSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
   
    if (!email || !password) {
      toast.error("Email or Password can't null");
    } else {
      const res = await setSignIn(data);
      if (res.error) {
        toast.error(res.message);
      } else {

        toast.success("Login Success");
        const token =  res.data.token
        const tokenBase64 = btoa(token)
        jsCookie.set('token',tokenBase64,{expires:1})
        router.push("/");
      }
    }
  };
  return (
    <>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
      <p className="text-lg color-palette-1 m-0">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-50">
        <label
          for="email"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-30">
        <label
          for="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
          role="button"
          onClick={onSubmit}
        >
          Continue to Sign In
        </button>
        <Link href="/sign-up">
          <a className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill">
            Sign Up
          </a>
        </Link>
      </div>
     
    </>
  );
}
