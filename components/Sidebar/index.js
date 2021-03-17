import { propStyles } from "util/style";
import styles from "./sidebar.module.css";

const LEFT = "left";
const FIRST_CHILD = ":first-child";
const LAST_CHILD = ":last-child";

const Sidebar = (props) => {
  const {
    children,
    className = "",
    side = LEFT,
    sideWidth,
    contentMin = "50%",
    space: rawSpace = "var(--s1)",
    noStretch = false,
    ...rest
  } = props;

  const sidebarSelector = side === LEFT ? LAST_CHILD : FIRST_CHILD;

  const space = String(rawSpace) === "0" ? "0px" : rawSpace;

  const myClass = `${styles.sidebarRoot} ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .${styles.sidebarRoot} {
          --space: ${space};
        }
        .${styles.sidebarRoot} > :global(*) {
          display: flex;
          flex-wrap: wrap;
          margin: calc(var(--space) / 2 * -1);
          ${propStyles([noStretch, "align-items: flex-start;"])}
        }
        .${styles.sidebarRoot} > :global(*) > :global(*) {
          margin: calc(var(--space) / 2);
          ${propStyles([sideWidth, "flex-basis"])}
          flex-grow: 1;
        }
        .${styles.sidebarRoot} > :global(*) > :global(${sidebarSelector}) {
          flex-basis: 0;
          flex-grow: 999;
          min-width: calc(${contentMin} - var(--space));
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
