import { propStyles } from "util/style";

/**
 * @typedef {Object} CoverProps
 * @prop {string=} minHeight - Minimum height (default 100vh)
 * @prop {string=} space - Space between elements
 * @prop {boolean=} noPad - Whether to remove padding around the Cover
 */

/**
 * - Centers an element vertically.
 * - When there are two or three children, the central element must have the class `centered`. The first child will appear at the top of the space, and the last will appear at the bottom.
 * @param {CoverProps} props
 * */
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
