import React, { useEffect, useState } from "react";

export default function CheckoutItem(){
  const [dataItem, setDataItemnew] = useState({})
  useEffect(async () => {
    const dataItemLocal=  await localStorage.getItem('data-item')
     const data= JSON.parse(dataItemLocal)
    
    setDataItemnew({
      name:data.detail.name,
      category:data.detail.category.name,
      thumbnail:data.detail.thumbnail,
    })
   
    console.log(data);
  },[])
    return (
        <>
        <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
            <div className="pe-4">
              <div className="cropped">
                <img src={`${process.env.NEXT_PUBLIC_IMAGE}${dataItem.thumbnail}`} className="img-fluid" alt="" />
              </div>
            </div>
            <div>
              <p className="fw-bold text-xl color-palette-1 mb-10">
               {dataItem.name}
              </p>
              <p className="color-palette-2 m-0">Category: {dataItem.category}</p>
            </div>
          </div>
        </>
    )
}