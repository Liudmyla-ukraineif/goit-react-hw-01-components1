import PropTypes from 'prop-types';
import Item from '../TransactionItem/TransactionItem';
import css from '../TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({ transactions }) {
  console.log(transactions)

  return (
    <table className={css.transactionHistory}>
  <thead>
        <tr className={css.tableTitle}>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {transactions.map(({id, type, amount, currency}) => (
      <Item key={id} 
        type={type}
        amount={amount}
        currency={currency}/>
        )
        )
    }
        
  </tbody>
</table>
  )
}

TransactionHistory.propType = {
  transactions: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired,
  })).isRequired,
  
}
