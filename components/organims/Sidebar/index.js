import React from "react";
import SidebarFooter from "./Footer";
import MenuItem from "./MenuItem";
import ProfileSidebar from "./Profile";
import jsCookie from "js-cookie";
import { useRouter } from "next/router";
export default function Sidebar(props) {

  const router= useRouter()

  const onLogout = () => {
    jsCookie.remove("token");
    router.push("/sign-in");
  };

  const { activeMenu } = props;
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <ProfileSidebar />
          <div className="menus">
            <MenuItem
              title="Overview"
              icon="icon-menu-overview"
              active={activeMenu === "overview"}
              href="/member/overview"
            />
            <MenuItem
              title="Transaction"
              icon="icon-menu-transaction"
              active={activeMenu === "transactions"}
              href="/transaction"
            />
            <MenuItem
              title="Messages"
              icon="icon-menu-message"
              active={activeMenu === "message"}
              href="/member/overview"
            />
            <MenuItem
              title="Card"
              icon="icon-menu-card"
              active={activeMenu === "card"}
              href="/member/overview"
            />
            <MenuItem
              title="Rewards"
              icon="icon-menu-reward"
              active={activeMenu === "reward"}
              href="/member/overview"
            />
            <MenuItem
              title="Settings"
              icon="icon-menu-setting"
              active={activeMenu === "settings"}
              href="/member/edit-profile"
            />
            <MenuItem
              title="Log Out"
              icon="icon-menu-logout"
              onClick={onLogout}
              href="#"
            />
          </div>
          <SidebarFooter />
        </div>
      </section>
    </>
  );
}
