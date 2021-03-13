import styles from "./sidebar.module.css";

const me = styles.sidebarRoot;
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
        ${me} {
          ${sideWidth ? `flex-basis: ${sideWidth}` : ""}
          --space: ${space};
        }
      `}</style>
      {/* Intermediary wrapper styles */}
      <style jsx>{`
        ${me} > * {
          margin: calc(${space} / 2 * -1);
          ${noStretch ? "align-items: flex-start;" : ""}
        }
      `}</style>
      {/* Second child styles */}
      <style jsx>{`
        ${me} > * > * {
          margin: calc(${space} / 2);
          ${this.sideWidth ? `flex-basis: ${this.sideWidth};` : ""}
        }
      `}</style>
      {/* Styles for whichever element is the sidebar */}
      <style jsx>{`
        ${me} > * > ${sidebarSelector} {
          flex-basis: 0;
          flex-grow: 999;
          min-width: calc(${contentMin} - ${space});
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
