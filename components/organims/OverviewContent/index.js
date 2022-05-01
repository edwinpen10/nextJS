import React, { useCallback, useEffect, useState } from "react";
import { getMemberOverview } from "../../../services/member";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  const [countData, setCount] = useState([])
  const [dataTransaction, setData] = useState([])

  const getMemberViewAPI= useCallback( async () => {
    const res = await getMemberOverview();
    if (res.error) {
      toast.error(res.message);
    } else {
     (res.data.data);
     setCount(res.data.count)
      setData(res.data.data)
    }
  },[])

  useEffect(() => {
    getMemberViewAPI()
  },[])
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                {
                  countData.map(item => {
                    return (
                          <Category KEY={item._id}
                          icon="icon-category-desktop"
                          nominal={item.value}
                          descrip={
                            <>
                             {item.name}
                            </>
                          }
                        />
                    )
                  })
                }
                
              </div>
            </div>
          </div>
          <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Latest Transactions
            </p>
            <div className="main-content main-content-table overflow-auto">
              <table className="table table-borderless">
                <thead>
                  <tr className="color-palette-1">
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    dataTransaction.map(item =>{
                      return(
                        <TableRow
                        key={item._id}
                        title={item.historyVoucherTopup.gameName}
                        item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                        price={item.value}
                        status={item.status}
                        category={item.historyVoucherTopup.category}
                        icon={item.historyVoucherTopup.thumbnail}
                      />
                      )
                    })
                  }
                 
                  {/* <TableRow
                    title="Call of Duty"
                    item={200}
                    price={500000}
                    status="Success"
                    category="Desktop"
                    icon="overview-2"
                  />
                  <TableRow
                    title="Oke Game"
                    item={200}
                    price={500000}
                    status="Pending"
                    category="Desktop"
                    icon="overview-3"
                  />
                  <TableRow
                    title="Mantul lele"
                    item={200}
                    price={500000}
                    status="Failed"
                    category="Desktop"
                    icon="overview-4"
                  /> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
