import css from "styled-jsx/css";
import { propStyles } from "util/style";
import styles from "./sidebar.module.css";

const LEFT = "left";

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

  const space = String(rawSpace) === "0" ? "0px" : rawSpace;
  const myPropStyles = css.resolve`
    ${propStyles(
      [space, "--space"],
      [contentMin, "--contentMin"],
      [sideWidth, "--sideWidth"]
    )}
  `;

  const myClass = [
    styles.sidebarRoot,
    myPropStyles.className,
    side === LEFT ? styles.sidebarLeft : styles.sidebarRight,
    noStretch ? styles.noStretch : "",
    sideWidth ? styles.sideWidth : "",
    className,
  ].join(" ");

  return (
    <div className={myClass} {...rest}>
      {children}
      {myPropStyles.styles}
    </div>
  );
};

export default Sidebar;
