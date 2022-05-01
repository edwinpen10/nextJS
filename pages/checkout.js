import React from "react";
import CheckoutCorfirmation from "../components/organims/CheckoutConfirmation";
import CheckoutDetail from "../components/organims/CheckoutDetail";
import CheckoutItem from "../components/organims/CheckoutItem";
import Image from "next/dist/client/image";
import jwtDecode from "jwt-decode";
export default function Checkout(props) {
  const {user} = props
  return (
    <>
      <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
          <div className="logo text-md-center text-start pb-50">
            <a className="" href="#">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </div>
          <div className="title-text pt-md-50 pt-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
            <p className="text-lg color-palette-1 mb-0">
              Waktunya meningkatkan cara bermain
            </p>
          </div>
          <CheckoutItem />
          <hr />
          <CheckoutDetail />
          <CheckoutCorfirmation />
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const token = req.cookies;
  if (token.token == null) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }else{
    const jwToken = Buffer.from(token.token, 'base64').toString('ascii')
    const payload = jwtDecode(jwToken);
    const userData = payload.player;
    return {
      props: {
        user: {userData},
      },
    };
  }

 
}
