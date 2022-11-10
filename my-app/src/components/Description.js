import PropTypes from "prop-types";
// var PropTypes = require('prop-types');
// import App from "../App";
const Description = ({ url, name, tag, location }) => {
  return (
    <div class='description'>
      <img src={url} alt='User avatar' class='avatar' />
      <p class='name'>{name}</p>
      <p class='tag'>{tag}</p>
      <p class='location'>{location}</p>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
Description.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Description;
