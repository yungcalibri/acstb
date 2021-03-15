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

  const sidebarSelectorClass =
    side === LEFT ? styles.sidebarLeft : styles.sidebarRight;
  const noStretchClass = noStretch ? styles.noStretch : "";
  const sideWidthClass = sideWidth ? styles.sideWidth : "";
  const myClass = ` ${styles.sidebarRoot} ${sidebarSelectorClass} ${noStretchClass} ${sideWidthClass} ${className} `;

  const space = String(rawSpace) === "0" ? "0px" : rawSpace;
  const myStyles = propStyles(
    [space, "--space"],
    [contentMin, "--contentMin"],
    [sideWidth, "--sideWidth"]
  );

  const sidebar = css.resolve`
    ${myStyles}
  `;

  console.debug(sidebar);

  return (
    <div className={`${myClass} ${sidebar.className}`} {...rest}>
      {children}
      {sidebar.styles}
    </div>
  );
};

export default Sidebar;
