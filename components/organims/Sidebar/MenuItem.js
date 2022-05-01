import React from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

export default function MenuItem(props) {
  const { title, icon, active, href, onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <>
      <div className={classItem} onClick={onClick}>
        <div className="me-3">
          <Image src={`/icon/${icon}.svg`} width={25} height={25} />
        </div>

        <p className="item-title m-0">
          {onClick ? (
            <Link href={'#'}>
            <a className="text-lg text-decoration-none">{title}</a>
            </Link>
          ) : (
            <Link href={href}>
              <a className="text-lg text-decoration-none">{title}</a>
            </Link>
          )}
        </p>
      </div>
    </>
  );
}
