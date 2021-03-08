import { propStyles } from 'util/style'
import styles from './box.module.css'

const Box = (props) => {
  const {
    borderWidth,
    children,
    className = '',
    invert,
    padding,
    ...rest
  } = props

  const propClass = !invert ? styles.box : styles.boxInvert

  const myClass = `${propClass} ${className}`

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
