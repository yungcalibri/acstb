import { propStyles } from "util/style";

/**
 * @typedef {Object} ClusterProps
 * @prop {string=} align - Value of `align-items`
 * @prop {string=} justify - Value of `justify-content`
 * @prop {string=} space - Padding between items in cluster
 */

/** @param {ClusterProps} props */
const Cluster = (props) => {
  const { align, children, className = "", justify, space, ...rest } = props;

  const myClass = `cluster ${className}`;

  return (
    <div className={myClass} {...rest}>
      <div>{children}</div>
      <style jsx>{`
        .cluster {
          ${propStyles([space, "--space"])}
        }
        .cluster > :global(*) {
          ${propStyles([justify, "justify-content"], [align, "align-items"])}
        }
      `}</style>
    </div>
  );
};

export default Cluster;
