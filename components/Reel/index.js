const Reel = (props) => {
  const { children, className = "", ...rest } = props;

  const myClass = `reel ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .reel {
        }
      `}</style>
    </div>
  );
};

export default Reel;
