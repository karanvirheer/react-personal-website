import "./topbar.scss";
import React from "react";
import { Person, Mail } from "@material-ui/icons";
import fileSaver from "file-saver";

export default function Topbar({ menuOpen, setMenuOpen }) {
  // process.env.REACT_APP_CLIENT_URL +
  const saveFile = () => {
    fileSaver.saveAs(
      "http://localhost:3000" + "/assets/Resume/karanvir_heer_resume.pdf",
      "Karanvir_Heer_Resume.pdf"
    );
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            karanvir heer
          </a>
          <div className="itemContainer">
            <Person />
            <span> +1 647 571 6094 </span>
          </div>
          <div className="itemContainer">
            <Mail />
            <span>karanvir.heer@ryerson.com</span>
          </div>
        </div>
        <div className="right">
          <div className="resume">
            <button type="submit" onClick={saveFile}>
              Resume
            </button>
          </div>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
