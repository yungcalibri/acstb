import { Children, useEffect } from "react";
import { propStyles } from "util/style";

/**
 * @typedef {Object} ClusterProps
 * @prop {string=} align - Value of `align-items`
 * @prop {string=} justify - Value of `justify-content`
 * @prop {string=} space - Padding between items in cluster
 */

/**
 * Displays children as a horizontally wrapping list with consistent spacing between items.
 * @param {ClusterProps} props
 */
const Cluster = (props) => {
  const {
    align,
    children,
    className = "",
    justify,
    space,
    role,
    ...rest
  } = props;

  useEffect(() => {
    if (role === "list") {
      validateChildren(children);
    }
  }, [children, role]);

  const myClass = `cluster ${className}`;

  return (
    <div className={myClass} role={role} {...rest}>
      {children}
      <style jsx>{`
        .cluster {
          ${propStyles(
            [space, "--space"],
            [justify, "justify-content"],
            [align, "align-items"]
          )}
        }
      `}</style>
    </div>
  );
};

const isListItemElement = (child) =>
  child?.type === "li" || child?.props?.role === "listitem";
const validateChildren = (children) => {
  const someInvalidChild = (
    Children.map(children, (child) => isListItemElement(child)) || []
  ).some((a) => !a);
  if (someInvalidChild) {
    throw new Error(`Cluster's children are not all listitems`);
  }
};

export default Cluster;
