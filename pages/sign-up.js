import React from "react";
import Signupform from "../components/organims/SignupForm";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
export default function singUp() {
  return (
    <>
      <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
        <div className="container mx-auto">
          <form action="">
            <div className="pb-50">
                <Link href="/">
              <a className="navbar-brand" href="/">
                <Image src="/icon/logo.svg" width={60} height={60}/>
              </a>
              </Link>
            </div>
            <Signupform/>
          </form>
        </div>
      </section>
    </>
  );
}
