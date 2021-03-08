import { Children, cloneElement, isValidElement } from 'react'
import styles from './stack.module.css'

const Stack = (props) => {
  const {
    asList,
    children,
    className = '',
    recursive,
    role = '',
    space,
    splitAfter,
    ...rest
  } = props

  const propClass = recursive ? styles.stackRecursive : styles.stack

  const myClass = `${propClass} ${className}`

  return (
    <div className={myClass} role={asList ? 'list' : role} {...rest}>
      {asList
        ? Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child, { role: 'listitem' })
            : child
        )
        : children}
      <style jsx>
        {`
          .${myClass} {
            ${!space ? '' : `--space: ${space};`}
          }
          .${myClass}:only-child {
            ${!splitAfter ? '' : 'height: 100%;'}
          }
          .${myClass} > :nth-child(${splitAfter || 0}) {
            ${!splitAfter ? '' : 'margin-bottom: auto;'}
          }
        `}
      </style>
    </div>
  )
}

export default Stack
