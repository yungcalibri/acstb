import { propStyles } from 'util/style'
import styles from './box.module.css'

const Box = (props) => {
  const { borderWidth, children, className = '', padding, ...rest } = props

  const myClass = `${styles.box} ${className}`

  const myStyles = propStyles(
    [borderWidth, '--border-width'],
    [padding, 'padding']
  )

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .${styles.box} {
          ${myStyles}
        }
      `}</style>
    </div>
  )
}

export default Box
