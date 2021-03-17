import { propStyles } from "util/style";
import styles from "./cluster.module.css";

const Cluster = (props) => {
  const { align, children, className = "", justify, space, ...rest } = props;

  const myClass = `${styles.cluster} ${className}`;

  // TODO the global child selector is applying to every cluster on the page. fucked.

  return (
    <div className={myClass} {...rest}>
      <div>
        {children}
        <style jsx>{`
          .${styles.cluster} {
            ${propStyles([space, "--space"])}
          }
          :global(.${styles.cluster} > *) {
            ${propStyles([justify, "justify-content"], [align, "align-items"])}
          }
        `}</style>
      </div>
    </div>
  );
};

export default Cluster;
