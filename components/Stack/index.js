import { Children, cloneElement, isValidElement } from "react";
import { propStyles } from "util/style";

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
