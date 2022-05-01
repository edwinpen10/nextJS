import React from "react";
import OverviewContent from "../../components/organims/OverviewContent";
import Sidebar from "../../components/organims/Sidebar";
import jwtDecode from "jwt-decode";
export default function Member() {
  return (
    <>
      <section className="overview overflow-auto">
        <Sidebar activeMenu="overview" />
        <OverviewContent/>
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
