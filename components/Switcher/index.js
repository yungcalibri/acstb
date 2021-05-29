import { propStyles } from "util/style";

/**
 * @typedef {Object} SwitcherProps
 * @prop {string=} threshold - Below this width, switch to the vertical layout.
 * @prop {string=} space - Total margin between siblings.
 * @prop {number=} limit - With more than `limit` children, use only the vertical layout. Default 7.
 */

/**
 * Displays children horizontally with equal length, when space permits. When space is insufficient, or children too numerous, switches to a vertical layout.
 * @param {SwitcherProps} props
 * @todo Add style features for prop `exceptions` - see https://every-layout.dev/layouts/switcher/#managing-proportions
 */
const Switcher = (props) => {
  const {
    children,
    className = "",
    exceptions = [],
    threshold,
    space,
    limit = 7,
    ...rest
  } = props;

  validateExceptions(exceptions);

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

const validateExceptions = (exs) => {
  if (!(exs instanceof Array)) {
    throw new Error(
      `Switcher error: the value of \`exceptions\` must be an array`
    );
  }
  if (exs.length < 1) {
    return;
  }
  exs.forEach((exEntry, idx) => {
    if (!(exEntry instanceof Array) || exEntry.length !== 2) {
      throw new Error(
        `Switcher error: exception ${idx} (${exEntry}) should be a two-entry array`
      );
    }
  });
  exs.forEach(([ex, flexGrow], idx) => {
    if (typeof ex !== "number") {
      throw new Error(
        `Switcher error: child index ${ex} in exception ${
          idx + 1
        } ([${ex}, ${flexGrow}]) must be a number`
      );
    }
    if (ex < 0) {
      throw new Error(
        `Switcher error: child index ${ex} in exception ${
          idx + 1
        } ([${ex}, ${flexGrow}]) must be greater than zero`
      );
    }
    if (typeof flexGrow !== "number") {
      throw new Error(
        `Switcher error: flex-grow value ${flexGrow} in exception ${
          idx + 1
        } ([${ex}, ${flexGrow}]) must be a number`
      );
    }
    if (flexGrow < 1) {
      throw new Error(
        `Switcher error: child index ${flexGrow} in exception ${
          idx + 1
        } ([${ex}, ${flexGrow}]) must be greater than one`
      );
    }
  });
};
