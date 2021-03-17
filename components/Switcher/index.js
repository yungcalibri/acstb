import { propStyles } from "util/style";
import styles from "./switcher.module.css";

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

  const myClass = [styles.switcher, className].join(" ");

  return (
    <div className={myClass} {...rest}>
      <div>{children}</div>
      <style jsx>{`
        .${styles.switcher} {
          ${propStyles([threshold, "--threshold"], [space, "--space"])}
        }
      `}</style>
      <style jsx>{`
        :global(.${styles.switcher} > * > :nth-last-child(n + ${limit})) {
          ${propStyles([limit, "flex-basis: 100%"])}
        }
        :global(.${styles.switcher} > * > :nth-last-child(n + ${limit}) ~ *) {
          ${propStyles([limit, "flex-basis: 100%"])}
        }
      `}</style>
    </div>
  );
};

export default Switcher;
