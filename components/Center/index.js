import React from "react";
import { propStyles } from "util/style";

/**
 * @typedef {Object} CenterProps
 * @prop {string=} gutters - Horizontal gutters
 * @prop {boolean=} intrinsic - Whether to center elements within the Center's area
 * @prop {string=} maxWidth
 * @prop {boolean=} text - Whether to apply `text-align: center`
 */

/** @param {CenterProps} props */
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

  const myClass = `center ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .center {
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
