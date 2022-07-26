import React from 'react'
import ResumeItem from '../ResumeItem/ResumeItem'
import IconAwesome from '../Icons/FontAwesome'
import styles from './Resume.module.css'

const Resume = ({ income, expense, total }) => {
  return (
    <section className={ styles.resume }>
      <ResumeItem header='Entradas' value={ income }>
        <IconAwesome icon='arrow-alt-circle-up' />
      </ResumeItem>
      
      <ResumeItem header='Saídas' value={ expense }>
        <IconAwesome icon='arrow-alt-circle-down'/>
      </ResumeItem>

      <ResumeItem header='Total' value={ total }>
        <IconAwesome icon='dollar-sign'/>
      </ResumeItem>
    </section>
  )
}

export default Resume
