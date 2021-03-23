import { propStyles } from "util/style";

const Grid = (props) => {
  const { children, className = "", min, space } = props;

  const myClass = `grid ${className}`;

  return (
    <div className={myClass}>
      {children}
      <style jsx>{`
        .grid {
          ${propStyles([space, "--space"], [min, "--min"])}
        }
      `}</style>
    </div>
  );
};

export default Grid;
