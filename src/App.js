import React from 'react'
import './App.css'
import Form from './components/Forms/Form'
import Header from './components/Header/Header'
import Resume from './components/Resume/Resume'

const App = () => {
  const data = localStorage.getItem('transactions');
  const [ transactionsList, setTransactionsList ] = React.useState(
    data ? JSON.parse( data ) : [] 
  );
  const [ income, setIncome ]   = React.useState( 0 );
  const [ expense, setExpense ] = React.useState( 0 );
  const [ total, setTotal ]     = React.useState( 0 );

  React.useEffect(() => {
    const amountExpense = transactionsList
    .filter( item => item.expense )
    .map(( transaction ) => Number( transaction.amount ))

    const amountIncome = transactionsList
    .filter( item => !item.expense )
    .map(( transaction ) => Number( transaction.amount ))

    const income = amountIncome.reduce(( acc, amount ) => acc + amount, 0).toFixed( 2 )
    const expense = amountExpense.reduce(( acc, amount ) => acc + amount, 0).toFixed( 2 )
    const total = Math.abs( income - expense ).toFixed(2)
    
    setIncome(`R$ ${ income }`);
    setExpense(`R$ ${ expense }`);
    setTotal(`${Number( income ) < Number( expense ) ? '-' : ''} R$ ${ total }`);
  }, [ transactionsList ])

  const handleAdd = ( transaction ) => {
    const newArrayTransaction = [ ...transactionsList, transaction ]
    setTransactionsList( newArrayTransaction )
    localStorage.setItem('transactions', JSON.stringify( newArrayTransaction))
  }

  return (
    <>
      <Header />
      <section className='main'>
        <Resume income={ income } expense={ expense } total={ total } />
        <Form 
          handleAdd={ handleAdd }
          transactionsList={ transactionsList }
          setTransactionsList={ setTransactionsList }
        />
      </section>
    </>
  )
}

export default App
