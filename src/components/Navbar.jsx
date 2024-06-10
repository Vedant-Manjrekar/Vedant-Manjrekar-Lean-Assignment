import React from "react";
import dp from "../../src/assets/dp.svg";
import Logo from "../../src/assets/pplogo.svg";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <img src={Logo} width={180} />
        </li>
        <li></li>
        <li>Learn</li>
        <li>Practice</li>
        <li>
          <img src={dp} height={30} alt='' />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
