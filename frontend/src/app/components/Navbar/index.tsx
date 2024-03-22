import React from "react";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">BlockTOPlus</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="">
            <Link className="btn btn-primary text-white" href="dashboard">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
