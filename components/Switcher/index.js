import { propStyles } from "util/style";

/* TODO Add prop: exceptions [[childIdx, flexGrowValue]] - see here
 * https://every-layout.dev/layouts/switcher/#managing-proportions */

/**
 * @typedef {Object} SwitcherProps
 * @prop {string=} threshold - Below this width, switch to the vertical layout.
 * @prop {string=} space - Total margin between siblings.
 * @prop {number=} limit - With more than `limit` children, use only the vertical layout. Default 7.
 */

/**
 * Displays children horizontally with equal length, when space permits. When space is insufficient, or children too numerous, switches to a vertical layout.
 * @param {SwitcherProps} props
 */
const Switcher = (props) => {
  const {
    children,
    className = "",
    threshold,
    space,
    limit = 7,
    ...rest
  } = props;

  const myClass = `switcher ${className}`;

  return (
    <div className={myClass} {...rest}>
      <div>{children}</div>
      <style jsx>{`
        .switcher {
          ${propStyles([threshold, "--threshold"], [space, "--space"])}
        }
        .switcher > :global(* > :nth-last-child(n + ${limit})) {
          ${propStyles([limit, "flex-basis: 100%"])}
        }
        .switcher > :global(* > :nth-last-child(n + ${limit}) ~ *) {
          ${propStyles([limit, "flex-basis: 100%"])}
        }
      `}</style>
    </div>
  );
};

export default Switcher;
