import { propStyles } from "util/style";

const Box = (props) => {
  const { borderWidth, children, className = "", padding, ...rest } = props;

  const myClass = `box ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .box {
          ${propStyles([borderWidth, "--border-width"], [padding, "padding"])}
        }
      `}</style>
    </div>
  );
};

export default Box;
