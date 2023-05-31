import PropTypes from 'prop-types';
import T from './TransactionHistory.module.css';

export const TransactionHistory = props => {
  return (
    <section>
      <table className={T.transactionHistory}>
        <thead className={T.transactionHead}>
          <tr className={T.transactionHeadRow}>
            <th className={T.transactionHeader}>Type</th>
            <th className={T.transactionHeader}>Amount</th>
            <th className={T.transactionHeader}>Currency</th>
          </tr>
        </thead>

        <tbody className={T.transactionBody}>
          {props.items.map(({ id, type, amount, currency }) => {
            return (
              <TransactionHistoryTR
                key={id}
                type={type}
                amount={amount}
                currency={currency}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

const TransactionHistoryTR = ({ type, amount, currency }) => {
  return (
    <tr className={T.transactionBodyRow}>
      <td className={T.transactionData}>{type}</td>
      <td className={T.transactionData}>{amount}</td>
      <td className={T.transactionData}>{currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
