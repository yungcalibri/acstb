import { propStyles } from "util/style";
import styles from "./cluster.module.css";

const Cluster = (props) => {
  const { align, children, className = "", justify, space, ...rest } = props;

  const myClass = `${styles.cluster} ${className}`;

  const myStyles = propStyles(
    [justify, "justify-content"],
    [align, "align-items"],
    [space, "--space"]
  );

  return (
    <div className={myClass} {...rest}>
      <div>
        {children}
        <style jsx>{`
          .${styles.cluster} {
            ${myStyles}
          }
        `}</style>
      </div>
    </div>
  );
};

export default Cluster;
