import * as React from "react";
import { BsMoonStars } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

export default function Header(props) {
  return (
    <header>
      <button
        onClick={props.toggleTheme}
        className="d-flex"
        aria-label="Switch Mode"
      >
        <span className="fw-500">
          {props.theme === "light"
            ? <BsMoonStars />
            : <MdSunny className='sun' />}
        </span>
      </button>
    </header>
  );
}
