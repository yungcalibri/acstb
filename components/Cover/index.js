import { propStyles } from "util/style";

const Cover = (props) => {
  const { children, className = "", minHeight, space, noPad } = props;

  const myClass = `cover ${className}`;

  return (
    <div className={myClass}>
      {children}
      <style jsx>{`
        .cover {
          ${propStyles(
            [space, "--space"],
            [minHeight, "min-height"],
            [noPad, "padding: 0"]
          )}
        }
      `}</style>
    </div>
  );
};

export default Cover;
