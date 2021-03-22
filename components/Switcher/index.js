import { propStyles } from "util/style";

const Switcher = (props) => {
  const {
    children,
    className = "",
    /* TODO Add prop: exceptions [[childIdx, flexGrowValue]] - see here
     * https://every-layout.dev/layouts/switcher/#managing-proportions */
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
