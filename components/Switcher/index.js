const Switcher = (props) => {
  const { children, ...rest } = props;
  return <div {...rest}>{children}</div>;
};

export default Switcher;
