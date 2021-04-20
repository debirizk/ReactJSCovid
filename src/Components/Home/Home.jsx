import React from "react";
import styles from "./Home.module.css";

const Footer = () => {
  const onMouseOut = (e) => {
    e.target.style.color = "#cccccc";
  };

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h6
          style={{
            display: "block",
            marginBottom: "0px",
            fontSize: 30,
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <a
            href="https://debirizk.github.io/index.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,0,255,0.6)", textDecoration: "none" }}
          >
            Back to Home
          </a>
        </h6>
      </div>
    </React.Fragment>
  );
};

export default Footer;