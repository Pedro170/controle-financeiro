import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <form className={ styles.form }>
      <label htmlFor="description">
        Descrição
        <input type="text" name="" id="description" />
      </label>

      <label htmlFor="valor">
        Valor
        <input type="text" name="" id="valor" />
      </label>

      <div className={ styles.radio }>
        <label>Entrada<input type="radio" name="" id="" /></label>
        <label>Saída<input type="radio" name="" id="" /></label>
      </div>

      <button className={ styles.adicionar }>Adicionar</button>
    </form>
  )
}

export default Form