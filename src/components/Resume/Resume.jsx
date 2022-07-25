import React from 'react'
import ResumeItem from '../ResumeItem/ResumeItem'
import IconAwesome from '../Icons/FontAwesome'
import styles from './Resume.module.css'

const Resume = () => {
  return (
    <section className={ styles.resume }>
      <ResumeItem header='Entradas'>
        <IconAwesome icon='arrow-alt-circle-up' />
      </ResumeItem>
      
      <ResumeItem header='Saídas'>
        <IconAwesome icon='arrow-alt-circle-down' />
      </ResumeItem>

      <ResumeItem header='Total'>
        <IconAwesome icon='dollar-sign' />
      </ResumeItem>
    </section>
  )
}

export default Resume
