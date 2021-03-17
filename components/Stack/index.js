import { Children, cloneElement, isValidElement } from "react";
import { propStyles } from "util/style";
import styles from "./stack.module.css";

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

  const primaryClass = recursive ? styles.stackRecursive : styles.stack;
  const splitClass = splitAfter ? styles.splitAfter : "";

  const myClass = [primaryClass, splitClass, className].join(" ");

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
          .${primaryClass} {
            ${propStyles([space, "--space"])}
          }
          .${splitClass} > :global(:nth-child(${splitAfter || 999})) {
            ${propStyles([splitAfter, "margin-bottom: auto"])}
          }
        `}
      </style>
    </div>
  );
};

export default Stack;
