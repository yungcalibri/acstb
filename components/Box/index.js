import { propStyles } from "util/style";

/**
 * @typedef {Object} BoxProps
 * @prop {string=} borderWidth - Box border width
 * @prop {string=} padding - Box padding (all sides)
 */

/** @param {BoxProps} props */
const Box = (props) => {
  const { borderWidth, children, className = "", padding, ...rest } = props;

  const myClass = `box ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .box {
          ${propStyles([borderWidth, "--border-width"], [padding, "padding"])}
        }
      `}</style>
    </div>
  );
};

export default Box;
