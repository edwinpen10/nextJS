import Image from "next/image";
import React from "react";
import Auth from "./auth";
import Menu from "./menu";
import Toggle from "./toggle-menu";

export default function Navbar() {
  return (
    <>
      {/*NAVBAR SECTION*/}
      <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
          <div className="container-fluid">
            <a className="navbar-brand" href="/#">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
            <Toggle/>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                <Menu title="Home" active href="/" />
                <Menu title="Games" />
                <Menu title="Rewards" />
                <Menu title="Discover" />
                <Menu title=" Global Rank" />
                <Auth isLogin={false}/>
              
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
