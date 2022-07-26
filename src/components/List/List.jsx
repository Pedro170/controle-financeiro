import React from 'react'
import styles from './List.module.css'
import ListItem from '../ListItem/ListItem'

const List = ({ itens, setItens }) => {

  const onDelete = ( ID ) => {
    const newArray = itens.filter(( transaction ) => transaction.id !== ID );
    setItens( newArray );
    localStorage.setItem('transactions', JSON.stringify( newArray ));
  }

  return (
    <table className={ styles.table }>
      <thead>
        <tr>
          <th className={ styles.th }>Descrição</th>
          <th className={ styles.th }>Valor</th>
          <th className={ styles.th }>Tipo</th>
          <th className={ styles.th }></th>
        </tr>
      </thead>
      <tbody>
        {
          itens.map(( item, idx ) => (
            <ListItem key={ idx } item={ item } onDelete={ onDelete } />
          ))
        }
      </tbody>
    </table>
  )
}

export default List