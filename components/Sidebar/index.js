import styles from "./sidebar.module.css";

const Sidebar = (props) => {
  const {
    children,
    _side,
    _sideWidth,
    _contentMin,
    _space,
    _noStretch,
    ...rest
  } = props;
  return (
    <div className={styles.sidebar} {...rest}>
      {children}
    </div>
  );
};

export default Sidebar;
