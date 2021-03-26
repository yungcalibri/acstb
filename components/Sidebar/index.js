import { propStyles } from "util/style";

const LEFT = "left";
const FIRST_CHILD = ":first-child";
const LAST_CHILD = ":last-child";

/**
 * @typedef {Object} SidebarProps
 * @prop {string=} side - "left" indicates the first child is the sidebar. "right" indicates the last child. (Default "left", any other value is considered equivalent to "right")
 * @prop {string=} sideWidth - Width of the sidebar.
 * @prop {string=} contentMin - Minimum width of the content part of the sidebar. Should be a percentage. When the content is below this percentage of the container's size, the sidebar wraps to the vertical layout.
 * @prop {string=} space - Gutter space between children.
 * @prop {boolean=} noStretch - Whether to apply `align-items: flex-start`.
 */

/** @param {SidebarProps} props */
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
