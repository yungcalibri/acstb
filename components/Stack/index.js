import { Children, cloneElement, isValidElement } from "react";
import { propStyles } from "util/style";

/**
 * @typedef {Object} SidebarProps
 * @prop {boolean=} asList - Whether to apply aria list roles to container and children.
 * @prop {boolean=} recursive - Whether to inject spacing between children's children.
 * @prop {string=} space - Spacing between children, default `var(--s1)`.
 * @prop {number=} splitAfter - Give the `n`th child `margin-top: auto`, pushing it (and its later siblings) to the bottom.
 * - Apply `height: 100%` to the parent, so that there is always space available for the split.
 */

/** @param {SidebarProps} props */
const Stack = (props) => {
  const {
    asList,
    children,
    className = "",
    recursive,
    role = "",
    space,
    splitAfter,
    ...rest
  } = props;

  const recursiveClass = recursive ? "recursive" : "";
  const splitClass = splitAfter ? "splitAfter" : "";

  const myClass = `stack ${recursiveClass} ${splitClass} ${className}`;

  return (
    <div className={myClass} role={asList ? "list" : role} {...rest}>
      {asList
        ? Children.map(children, (child) =>
            isValidElement(child)
              ? cloneElement(child, { role: "listitem" })
              : child
          )
        : children}
      <style jsx>
        {`
          .stack {
            ${propStyles([space, "--space"])}
          }
          .stack.splitAfter > :global(:nth-child(${splitAfter})) {
            ${propStyles([splitAfter, "margin-bottom: auto"])}
          }
        `}
      </style>
    </div>
  );
};

export default Stack;
