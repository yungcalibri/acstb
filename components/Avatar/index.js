import styles from './avatar.module.css'

const Avatar = (props) => {
  return (
    <img
      className={styles.avatar}
      alt="Andrew Stebenné's avatar, an iridescent golden beetle on a fingertip"
      srcSet="/images/me_qtr_115.jpg 115w, /images/me_half_230.jpg 230w, /images/me_full_460.jpg 460w"
      sizes="(min-width: 180ch) 460px, 230px"
      src="/images/me_half_230.jpg"
    />
  )
}

export default Avatar
