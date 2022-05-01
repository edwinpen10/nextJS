import React from "react";
import cx from "classnames";
import Link from "next/link";
export default function Menu(props) {
  const { active, title, href='/' } = props;

  const classTitle = cx({
    "nav-link": true,
    active,
  });

  return (
    <>
      <li className="nav-item my-auto">
          <Link href={href}>
            <a className={classTitle} aria-current="page">
            {title}
            </a>
          </Link>
      
      </li>
    </>
  );
}
