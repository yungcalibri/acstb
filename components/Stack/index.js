import { Children, cloneElement, isValidElement } from 'react'
import styles from './stack.module.css'

const Stack = (props) => {
  const {
    asList,
    children,
    recursive,
    role = '',
    space,
    splitAfter,
    ...rest
  } = props

  const myClass = recursive ? styles.stackRecursive : styles.stack

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
            ${!space ? '' : `--space: ${space}`}
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
