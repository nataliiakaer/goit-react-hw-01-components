import PropTypes from 'prop-types';

export const TransactionHistory = props => {
  return (
    <section>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
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
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
