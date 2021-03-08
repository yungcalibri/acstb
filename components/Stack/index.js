import styles from './stack.module.css'

const Stack = (props) => {
  const { children, recursive, space, splitAfter, ...rest } = props

  const myClass = recursive ? styles.stackRecursive : styles.stack

  return (
    <div className={myClass} {...rest}>
      {children}
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
