import React from "react";
import classnames from "classnames";
import styles from "./Logo.module.css";

// props.element описывает внутри какого компонента используется лого

const Logo = ({ component }) => {
  return (
    <a className={classnames(styles.logo, styles[component])} href="/">
      в<span className={classnames(styles.word)}>ПОДОЛЬСКE</span>
    </a>
  );
};

export default Logo;
