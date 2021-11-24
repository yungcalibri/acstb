import styles from "./avatar.module.css";

const sources = [
  ["/images/me.jpg", "115w"],
  ["/images/me/one_half_230.jpg", "230w"],
  ["/images/me/three_qtr_345.jpg", "345w"],
  ["/images/me/full_460.jpg", "460w"],
];
const srcSet = sources.map((pair) => pair.join(" ")).join(", ");

const Avatar = (props) => {
  const { className = "", ...rest } = props;

  const myClass = `${styles.avatar} ${className}`;

  return (
    <img
      className={myClass}
      alt="An iridescent golden beetle on a fingertip: my avatar."
      height="230px"
      width="230px"
      srcSet={srcSet}
      sizes="(min-width: 160ch) 345w, 230px"
      src="/images/me/full_460.jpg"
      {...rest}
    />
  );
};

export default Avatar;
