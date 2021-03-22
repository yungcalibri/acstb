import { propStyles } from "util/style";
import styles from "./cluster.module.css";

const Cluster = (props) => {
  const { align, children, className = "", justify, space, ...rest } = props;

  const myClass = `${styles.cluster} ${className}`;

  return (
    <div className={myClass} {...rest}>
      <div>{children}</div>
      <style jsx>{`
        .${styles.cluster} {
          ${propStyles([space, "--space"])}
        }
        .${styles.cluster} > :global(*) {
          ${propStyles([justify, "justify-content"], [align, "align-items"])}
        }
      `}</style>
    </div>
  );
};

export default Cluster;
