export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <li>
        <span> Good: {good} </span>
      </li>
      <li>
        <span> Neutral: {neutral} </span>
      </li>
      <li>
        <span> Bad: {bad} </span>
      </li>
      <li>
        <span> Total: {total} </span>
      </li>
      <li>
        <span> Positive feedback: {percentage}% </span>
      </li>
    </ul>
  );
};

// export const Statistics = ({
//   good,
//   neutral,
//   bad,
//   total,
//   positivePercentage,
// }) => (
//   <div>
//     <p>Good: {good}</p>
//     <p>Neutral: {neutral}</p>
//     <p>Bad: {bad}</p>
//     <p>Total: {total}</p>
//     <p>Positive: {positivePercentage.toFixed(2)}%</p>
//   </div>
// );
