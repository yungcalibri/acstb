import { Children, cloneElement, isValidElement } from "react";
import { propStyles } from "util/style";

/**
 * @typedef {Object} ClusterProps
 * @prop {string=} align - Value of `align-items`
 * @prop {string=} justify - Value of `justify-content`
 * @prop {string=} space - Padding between items in cluster
 * @prop {boolean=} asList - Mark up the cluster as a list
 */

/**
 * Displays children as a horizontally wrapping list with consistent spacing between items.
 * @param {ClusterProps} props
 */
const Cluster = (props) => {
  const {
    align,
    asList,
    children,
    className = "",
    justify,
    space,
    role,
    ...rest
  } = props;

  const myClass = `cluster ${className}`;

  return (
    <div className={myClass} role={asList ? "list" : role} {...rest}>
      <div>
        {asList
          ? Children.map(children, (child) =>
              isValidElement(child)
                ? cloneElement(child, { role: "listitem" })
                : child
            )
          : children}
      </div>
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
