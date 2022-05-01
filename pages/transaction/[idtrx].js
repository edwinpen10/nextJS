import React from "react";
import TransactionDetail from "../../components/organims/TransactionDetailContent";
import jwtDecode from "jwt-decode";
import { getTransactionsDetail } from "../../services/member";
export default function DetailTransaction(props) {
  const {transactionDetail} = props
  return(<>
      <section className="transactions-detail overflow-auto">
        <TransactionDetail data={transactionDetail}/>
    </section>
  </>);
}

export async function getServerSideProps({ req, params }) {
  const {idtrx} = params
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
   const res = await getTransactionsDetail(idtrx, jwToken)
   
    return {
      props: {
        transactionDetail: res.data,
      },
    };
  }

 
}

