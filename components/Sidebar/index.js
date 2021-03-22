import { propStyles } from "util/style";

const LEFT = "left";
const FIRST_CHILD = ":first-child";
const LAST_CHILD = ":last-child";

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
