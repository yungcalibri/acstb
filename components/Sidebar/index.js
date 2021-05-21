import React from "react";
import isString from "lodash/isString";
import { propStyles } from "util/style";

const LEFT = "left";
const FIRST_CHILD = ":first-child";
const LAST_CHILD = ":last-child";

/**
 * @typedef {Object} SidebarProps
 * @prop {string=} side - "left" indicates the first child is the sidebar. "right" indicates the last child. (Default "left", any other value is considered equivalent to "right")
 * @prop {string=} sideWidth - Width of the sidebar. Defaults to the width of its content.
 * @prop {string=} contentMin - *Must* be a percentage. The sidebar becomes vertical when its content takes less than this proportion of the available space.
 * @prop {string=} space - Gutter space between children.
 * @prop {boolean=} noStretch - Whether children should adopt their natural height in the horizontal layout.
 */

/**
 * * Places two grandchildren side by side. When there is not enough space, the two grandchildren wrap to a vertical layout.
 * * *Requires* an intermediary wrapper.
 * @todo Replace `noStretch` prop with an `align` prop to provide the value of `align-items` for the single direct child.
 * @param {SidebarProps} props
 */
const Sidebar = (props) => {
  const {
    children,
    className = "",
    side = LEFT,
    sideWidth,
    contentMin,
    space: rawSpace,
    noStretch = false,
    ...rest
  } = props;

  validateContentMin(contentMin);

  validateSidebarChildren(children);

  const sidebarSelector = side === LEFT ? LAST_CHILD : FIRST_CHILD;

  const space = String(rawSpace) === "0" ? "0px" : rawSpace;

  const myClass = `sidebarRoot ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .sidebarRoot {
          ${propStyles([space, "--space"], [contentMin, "--contentMin"])}
        }
        .sidebarRoot > :global(*) {
          ${propStyles([noStretch, "align-items: flex-start"])}
        }
        .sidebarRoot > :global(*) > :global(*) {
          ${propStyles([sideWidth, "flex-basis"])}
        }
        .sidebarRoot > :global(*) > :global(${sidebarSelector}) {
          flex-basis: 0;
          flex-grow: 999;
          min-width: calc(var(--contentMin) - var(--space));
        }
      `}</style>
    </div>
  );
};

export default Sidebar;

function validateContentMin(contentMin) {
  if (!isString(contentMin)) {
    throw new Error("Sidebar's contentMin prop must be a string");
  }
  if (!contentMin.includes("%")) {
    throw new Error(
      `Sidebar's contentMin prop must be a percentage value, e.g.: "60%"`
    );
  }
}

function validateSidebarChildren(children) {
  if (React.Children.count(children) !== 1) {
    throw new Error(`Sidebar must have exactly one direct child`);
  }
}
