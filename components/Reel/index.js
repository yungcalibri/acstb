import { propStyles } from "util/style";

/**
 * @typedef ReelProps
 * @prop {string=} space - Space between elements
 */

/**
 * Displays children horizontally, overflowing in the X-axis if necessary.
 * @todo Update design and functionality to support using this component without a scrollbar
 * @param {ReelProps} props
 */
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
