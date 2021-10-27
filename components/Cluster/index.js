import React from "react";
import { Children, cloneElement, isValidElement } from "react";
import { propStyles } from "util/style";

const MemoEl = ({ Element = "div", ...rest }) => <Element {...rest} />;
const El = React.memo(MemoEl);

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
    element = "div",
    justify,
    space,
    role,
    ...rest
  } = props;

  const myClass = `cluster ${className}`;

  return (
    <El
      Element={element}
      className={myClass}
      role={asList ? "list" : role}
      {...rest}>
      {asList
        ? Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child, { role: "listitem" })
              : child
          )
        : children}
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

export default Cluster;
