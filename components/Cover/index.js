import React from "react";
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

  validateCoverChildren(children);

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

const validateCoverChildren = (ch) => {
  const count = React.Children.count(ch);
  // First, the simplest acceptable solution: if there's only one child,
  // there are no further restrictions.
  if (count === 1) {
    return;
  }

  // Second, exclude zero children or more than four children.
  if (count === 0) {
    throw new Error(`Cover has 0 children, should be 1<=x<=3`);
  }
  if (count >= 4) {
    throw new Error(`Cover has ${count} children, should be 1<=x<=3`);
  }

  // The only possibilities now are:
  // - we have exactly two children, or
  // - we have exactly three children.

  // In either case, exactly one child should have the ".centered" class.

  // With two children, the position of the centered child is immaterial,
  // but with three children, the centered child must be the second.
  // If we express this in binary, there are three acceptable values:
  // 01 | 10 | 010
  // The simplest validation would be to check if the arrangement of
  // centered children matches one of these.
  // Unfortunately, JavaScript is rather awkward with numbers, so we'll use
  // strings instead.

  const validArrangements = new Set(["01", "10", "010"]);
  const centeredChildrenArrangement = (
    React.Children.map(ch, (child) =>
      Number((child.props?.className ?? "").includes("centered"))
    ) ?? []
  ).join("");

  // Finally, make sure exactly one child has the .centered class.
  if (validArrangements.has(centeredChildrenArrangement)) {
    return;
  }

  // The arrangement was invalid, must error. If there were three children,
  // our error message can be more specific and clear.
  if (count === 3) {
    throw new Error(
      `When Cover has three children, the second child must have .centered`
    );
  }
  throw new Error(`Cover must have exactly one child with .centered`);
};
