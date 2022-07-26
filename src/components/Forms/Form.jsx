import React from 'react'
import List from '../List/List';
import styles from './Form.module.css'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [ desc, setDesct ] = React.useState( '' );
  const [ amount, setAmount ] = React.useState( '' );
  const [ isExpense, setIsxpense ] = React.useState( false );

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if( !desc || !amount ) {
      alert('Informe a descrição e o valor')
    } else if( amount < 1 ) {
      alert('O valor tem que ser positivo')
    }

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd( transaction );

    setDesct('')
    setAmount('')
  }

  return (
    <>
      <div className={ styles.form }>
        <label htmlFor="description">
          Descrição
          <input 
            type="text"
            name="" id="description" 
            value={ desc }
            onChange={({ target }) => setDesct( target.value )}
          />
        </label>
  
        <label htmlFor="valor">
          Valor
          <input 
            type="number"
            name="" id="valor" 
            value={ amount }
            onChange={({ target }) => setAmount( target.value )}
          />
        </label>
  
        <div className={ styles.radio }>
          <label>
            Entrada
            <input 
              id="entrada"
              type="radio" 
              name="expense"
              checked
              onChange={() => setIsxpense( !isExpense )}
            />
          </label>
          <label>
            Saída
            <input 
              id="saida"
              type="radio" 
              name="expense" 
              onChange={() => setIsxpense( !isExpense )}
            />
          </label>
        </div>
  
        <button className={ styles.adicionar } onClick={ handleSave }>Adicionar</button>
      </div>
      <List itens={ transactionsList } setItens={ setTransactionsList } />
    </>
  )
}

export default Form