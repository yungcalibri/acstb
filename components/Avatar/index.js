import styles from "./avatar.module.css";

const sources = [
  ["/images/me_qtr_115.jpg", "115w"],
  ["/images/me_half_230.jpg", "230w"],
  ["/images/me_three_qtr_345.jpg", "345w"],
  ["/images/me_full_460.jpg", "460w"],
];
const srcSet = sources.map((pair) => pair.join(" ")).join(", ");

const Avatar = (props) => {
  const { className = "", ...rest } = props;

  const myClass = `${styles.avatar} ${className}`;

  return (
    <img
      className={myClass}
      alt="An iridescent golden beetle on a fingertip"
      srcSet={srcSet}
      sizes="(min-width: 180ch) 460px, (min-width: 160ch) 345w, 230px"
      src="/images/me_three_qtr_345.jpg"
      {...rest}
    />
  );
};

export default Avatar;
