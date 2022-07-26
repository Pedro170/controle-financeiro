import React from 'react'
import styles from './ResumeItem.module.css'

const ResumeItem = ({ header, value, children }) => {
  return (
    <div className={ styles.containerCard }>
      <header className={ styles.header }>
        <p>{ header }</p>
        { children }
      </header>
      <span className={ styles.value }>{ value }</span>
    </div>
  )
}

export default ResumeItem
