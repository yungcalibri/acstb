import { propStyles } from "util/style";

/**
 * @typedef {Object} GridProps
 * @prop {string=} min - Below this width, switches to a single-column layout (default 250px)
 * @prop {string=} space - Padding between elements in grid
 */

/** @param {GridProps} props */
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
