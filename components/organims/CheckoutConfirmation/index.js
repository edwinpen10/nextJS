import React, { useState } from "react";
import { toast } from "react-toastify";
import { setCheckout } from "../../../services/player";
import { useRouter } from "next/router";
export default function CheckoutCorfirmation() {
  const [checkBox, setCheckBox] = useState(false);
  const router = useRouter();
  const onSubmit = async () => {
    const dataItem = JSON.parse(localStorage.getItem("data-item"));
    const dataTopup = JSON.parse(localStorage.getItem("data-topup"));

    if (!checkBox) {
      toast.error("Please checked");
    }else{
      const data = {
        voucher: dataItem.detail._id,
        nominal: dataTopup.nominalItem._id,
        payment: dataTopup.paymentItem.payment,
        bank: dataTopup.paymentItem.id,
        name: dataTopup.bankAccountName,
        accountUser: dataTopup.verifyID,
      };

      // console.log(data);
  
      const res = await setCheckout(data);
  
      if (res.error) {
        toast.error(res.message);
      } else {
        toast.success("Checkout success");
        router.push("/complete-checkout");
      }
    }
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => {
            setCheckBox(!checkBox);
          }}
        />
        <span className="checkmark"></span>
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>
    </>
  );
}
