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

  const sidebarSelector = side === LEFT ? FIRST_CHILD : LAST_CHILD;

  const space = String(rawSpace) === "0" ? "0px" : rawSpace;

  const myClass = `${styles.sidebarRoot} ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      {/* My styles */}
      <style jsx>{`
        ${styles.sidebarRoot} {
          ${sideWidth ? `flex-basis: ${sideWidth}` : ""}
          --space: ${space};
        }
        ${styles.sidebarRoot} > * {
          display: flex;
          flex-wrap: wrap;
          margin: calc(var(--space) / 2 * -1);
          ${noStretch ? "align-items: flex-start;" : ""}
        }
        ${styles.sidebarRoot} > * > * {
          margin: calc(var(--space) / 2);
          ${sideWidth ? `flex-basis: ${sideWidth};` : ""}
          flex-grow: 1;
        }
        ${styles.sidebarRoot} > * > ${sidebarSelector} {
          flex-basis: 0;
          flex-grow: 999;
          min-width: calc(${contentMin} - var(--space));
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
