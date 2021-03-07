import React from 'react'
import { propStyles } from 'util/style'
import styles from './center.module.css'

const Center = (props) => {
  const { children, gutters, intrinsic, maxWidth, text, ...rest } = props

  const myStyles = propStyles(
    [gutters, 'padding-left', 'padding-right'],
    [
      intrinsic,
      'display: flex',
      'flex-direction: column',
      'align-items: center'
    ],
    [maxWidth, 'max-width'],
    [text, 'text-align: center']
  )

  return (
    <div className={styles.center} {...rest}>
      {children}
      <style jsx>{`
        .${styles.center} {
          ${myStyles}
        }
      `}</style>
    </div>
  )
}

export default Center
