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
 * @todo Apply centering to `:only-child`.
 * @todo Validate that one or both of these conditions is true:
 *  1. The Cover has exactly one child
 *  2. The Cover has exactly two children, AND one of them has the "centered" class
 *  3. The Cover has exactly three children, AND the second child has the "centered" class
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
