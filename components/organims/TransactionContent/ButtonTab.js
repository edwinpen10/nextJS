import React from "react";
import Link from "next/link";
import cx from "classnames";
export default function ButtonTab(props) {
  const { title, active, onClick } = props;

  const buttonClass = cx({
    "btn btn-status rounded-pill text-sm  me-3": true,
    "btn-active": active,
  });

  return (
    <>
      <Link href="#">
        <button type="button" onClick={onClick} data-filter="*" className={buttonClass}>
          {title}
        </button>
      </Link>
    </>
  );
}
