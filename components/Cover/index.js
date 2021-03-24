import { propStyles } from "util/style";

/**
 * @typedef {Object} CoverProps
 * @prop {string=} minHeight - Minimum height (default 100vh)
 * @prop {string=} space - Space between elements
 * @prop {boolean=} noPad - Whether to remove padding around the Cover
 */

/** @param {CoverProps} props */
const Cover = (props) => {
  const { children, className = "", minHeight, space, noPad } = props;

  const myClass = `cover ${className}`;

  return (
    <div className={myClass}>
      {children}
      <style jsx>{`
        .cover {
          ${propStyles(
            [space, "--space"],
            [minHeight, "min-height"],
            [noPad, "padding: 0"]
          )}
        }
      `}</style>
    </div>
  );
};

export default Cover;
