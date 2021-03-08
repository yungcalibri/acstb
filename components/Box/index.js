import { propStyles } from 'util/style'
import styles from './box.module.css'

const Box = (props) => {
  const { borderWidth, children, invert, padding, ...rest } = props

  const myClass = !invert ? styles.box : styles.boxInvert

  const myStyles = propStyles(
    [borderWidth, '--border-width'],
    [padding, 'padding']
  )

  return (
    <div className={myClass} {...rest}>
      {children}
      <style jsx>{`
        .${myClass} {
          ${myStyles}
        }
      `}</style>
    </div>
  )
}

export default Box
