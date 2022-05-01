import React, { useState } from "react";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function TopUpForm(props) {
  const router = useRouter();
  const [verifyID, setverifyID] = useState("");
  const [bankAccountName, setBankAccounrName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const { nominals, payment } = props;
  const onNominalItemChange = (data) => {
    setNominalItem(data);
  };
  const onPaymnetItemChange = (
    payment,
    payment_type,
    bank,
    id,
    norek,
    rekname
  ) => {
    let data = {
      payment_type,
      payment,
      bank,
      id,
      norek,
      rekname,
    };
    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyID === "" ||
      bankAccountName === "" ||
      nominalItem === {} ||
      paymentItem === {}
    ) {
      toast.error("Please check your data");
    } else {
      let data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };

      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
    // localStorage.setItem('nominal-item', JSON.stringify(data))
    // localStorage.setItem('payment=item', JSON.stringify(data))
  };
  return (
    <>
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            for="ID"
            className="form-label text-lg fw-medium color-palette-1 mb-10"
          >
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(event) => setverifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => {
            return (
              <NominalItem
                _id={nominal._id}
                coinQuantity={nominal.coinQuantity}
                coinName={nominal.coinName}
                price={nominal.price}
                onChange={() => onNominalItemChange(nominal)}
              />
            );
          })}

          {/* <NominalItem _id="121" coinQuantity={20} coinName="Gold" price={29000}/>
                    <NominalItem _id="122" coinQuantity={20} coinName="Gold" price={29000}/> */}

          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payment.map((item) => {
              return item.banks.map((data) => {
                return (
                  <PaymentItem
                    bankID={data._id}
                    bankName={data.bankName}
                    type={item.type}
                    onChange={() =>
                      onPaymnetItemChange(
                        item._id,
                        item.type,
                        data.bankName,
                        data._id,
                        data.noRekening,
                        data.name
                      )
                    }
                  />
                );
              });
            })}

            {/* <PaymentItem bankID="12315" bankName="Mandiri" type="transfer"/> */}

            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          for="bankAccount"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          onChange={(event) => setBankAccounrName(event.target.value)}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
          onClick={onSubmit}
        >
          Continue
        </button>
      </div>
    </>
  );
}
