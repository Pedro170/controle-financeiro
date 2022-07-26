import React from 'react'
import IconAwesome from '../Icons/FontAwesome'
import styles from './ListItem.module.css'

const ListItem = ({ item, onDelete }) => {
  return (
    <tr>
      <td className={ styles.td }>{ item.desc }</td>
      <td className={ styles.td }>{ item.amount }</td>
      <td className={ styles.td }>
        {
          item.expense 
          ? ( <IconAwesome icon='arrow-alt-circle-down' color='#f00' /> )
          : ( <IconAwesome icon='arrow-alt-circle-up' color='#0f0' /> )
        }
      </td>
      <td className={ styles.td }>
        <button className={ styles.btn } onClick={() => onDelete( item.id )}>
          <IconAwesome icon='trash-alt' />
        </button>
      </td>
    </tr>
  )
}

export default ListItem