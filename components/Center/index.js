import React from "react";
import { propStyles } from "util/style";
import styles from "./center.module.css";

const Center = (props) => {
  const {
    children,
    className = "",
    gutters,
    intrinsic,
    maxWidth,
    text,
    ...rest
  } = props;

  const myClass = `${styles.center} ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .${styles.center} {
          ${propStyles(
            [gutters, "padding-left", "padding-right"],
            [
              intrinsic,
              "display: flex",
              "flex-direction: column",
              "align-items: center",
            ],
            [maxWidth, "max-width"],
            [text, "text-align: center"]
          )}
        }
      `}</style>
    </div>
  );
};

export default Center;

export const PageCenter = ({ maxWidth: _, ...props }) => (
  <Center maxWidth="var(--page-content-width)" {...props} />
);
