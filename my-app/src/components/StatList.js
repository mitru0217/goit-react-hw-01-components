import PropTypes from "prop-types";

const StatList = ({ items }) => {
  return (
    <ul class='stat-list'>
      {items.map((item) => (
        <li key={item.id}>
          <span class='label'>{item.label}</span>
          <span class='percentage'>{item.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

export default StatList;
StatList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
};
