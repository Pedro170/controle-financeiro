import React from 'react'
import styles from './ResumeItem.module.css'

const ResumeItem = ({ header, value='1000', children }) => {
  return (
    <div className={ styles.containerCard }>
      <header className={ styles.header }>
        { header }
        { children }
      </header>
      <span>{ value }</span>
    </div>
  )
}

export default ResumeItem
