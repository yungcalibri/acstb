import { propStyles } from "util/style";

const Reel = (props) => {
  const { children, className = "", space, ...rest } = props;

  const myClass = `reel ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .reel {
          ${propStyles([space, "--space"])}
        }
      `}</style>
    </div>
  );
};

export default Reel;
