import { Children, memo, useEffect } from "react";
import { propStyles } from "util/style";

const MemoEl = ({ Element = "div", ...rest }) => <Element {...rest} />;
const El = memo(MemoEl);

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
    children,
    className = "",
    element = "div",
    justify,
    space,
    role,
    ...rest
  } = props;

  useEffect(() => {
    if (role === "list") {
      console.debug("validate");
      validateChildren(children);
    }
  }, [children]);

  const myClass = `cluster ${className}`;

  return (
    <El Element={element} className={myClass} role={role} {...rest}>
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
    </El>
  );
};

const isListItemElement = (child) =>
  child?.type === "li" || child?.props?.role === "listitem";
const validateChildren = (children) => {
  const childrenAreListItems =
    Children.map(children, (child) => isListItemElement(child)) || [];
  console.debug(childrenAreListItems);
  const someInvalidChild = childrenAreListItems.some((a) => !a);
  if (someInvalidChild) {
    throw new Error(`Cluster's children are not all listitems`);
  }
};

export default Cluster;
