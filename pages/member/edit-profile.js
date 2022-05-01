import jsCookie from "js-cookie";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import FormInput from "../../components/atoms/input";
import Sidebar from "../../components/organims/Sidebar";
import { updataProfile } from "../../services/member";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function EditProfile() {
  const [userData, setUserData] = useState({})
  const router= useRouter()
  useEffect(() => {
    const token = jsCookie.get('token')
    if(token){
      const jwtToken =  Buffer.from(token, 'base64').toString('ascii')
      const payload= jwtDecode(jwtToken)
      const dataUser = payload.player
      setUserData(dataUser)
    }
  },[])
  const onSubmit = async () => {
    console.log(userData);
    const data = new FormData()
    data.append('name', userData.name)
    const res = await updataProfile(userData.id, data)
    if (res.error) {
      toast.error(res.message);
    } else {

      toast.success("Updata data Success");
      jsCookie.remove('token')
      router.push("/sign-in");
    }
  }
  return (
    <>
      <section className="edit-profile overflow-auto">
        <Sidebar activeMenu="settings" />
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="position-relative me-20">
                    <img
                      src="/img/avatar-1.png"
                      width="90"
                      height="90"
                      className="avatar img-fluid"
                    />
                    <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                      <img src="/icon/upload.svg" />
                    </div>
                  </div>
                  <div className="image-upload">
                    <label for="avatar">
                      <img src="/icon/upload.svg" width={90} height={90} />
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <FormInput label="Full Name" value={userData.name} onChange={(event) => setUserData({
                    ...userData,
                    name: event.target.value
                  })} />
                </div>
                <div className="pt-30">
                  <FormInput label="Email Address" disabled value={userData.email} />
                </div>
              
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
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