import PropTypes from 'prop-types';
import css from '../TransactionItem/TransactionItem.module.css';

export default function Item({ type, amount, currency }) {
  return (
  <tr className={css.infoTitle}>
    <td className={css.info}>{type}</td>
    <td className={css.info}>{amount}</td>
    <td className={css.info}>{currency}</td>
    </tr>
  )
}

Item.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency:PropTypes.string.isRequired,
}
