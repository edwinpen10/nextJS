import React from "react";
import Sidebar from "../../components/organims/Sidebar";
import TransactionContent from "../../components/organims/TransactionContent";
import jwtDecode from "jwt-decode";
export default function IndexTransaction() {
  return (
    <>
      <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions" />
        <TransactionContent />
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
    return {
      props: {},
    };
  }

 
}
