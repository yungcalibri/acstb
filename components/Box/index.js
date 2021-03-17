import { propStyles } from "util/style";
import styles from "./box.module.css";

const Box = (props) => {
  const { borderWidth, children, className = "", padding, ...rest } = props;

  const myClass = `${styles.box} ${className}`;

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .${styles.box} {
          ${propStyles([borderWidth, "--border-width"], [padding, "padding"])}
        }
      `}</style>
    </div>
  );
};

export default Box;
