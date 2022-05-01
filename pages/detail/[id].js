import React, { useCallback, useEffect, useState } from "react";
import TopUpForm from "../../components/organims/TopUpForm";
import TopUpItem from "../../components/organims/TopUpItem";
import Navbar from "../../components/organims/Navbar/navbar";
import Footer from "../../components/organims/Footer";
import { useRouter } from "next/router";
import { getDetailVoucher } from "../../services/player";

export default function Detail() {
  const {query, isReady} = useRouter()
  const [dataItem, setDataItem] = useState({
    name:'',
    thumbnail:'',
    category:{
      name:''
    }
  })

  const [nominals, setNominal] = useState([])
  const [payment, setPayment] = useState([])
  const getVocherDetailAPI = useCallback (async (id) => {
      const data =await getDetailVoucher(id)
      setDataItem(data.detail)
      setNominal(data.detail.nominals)
      setPayment(data.payment)
      return data
  },[])
  useEffect(async () => {
  
    if(isReady){
     
      const getData = await getVocherDetailAPI(query.id)
      localStorage.setItem('data-item', JSON.stringify(getData))

     
    }else{
      ('blm siapp');
    }
  },[isReady])
  return (
    <>
     
     <Navbar/>

      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">

              <TopUpItem data={dataItem} type="mobile"/>
           
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
            <TopUpItem  data={dataItem} type="desktop"/>
              <hr />
              <TopUpForm nominals={nominals} payment={payment}/>
            
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
