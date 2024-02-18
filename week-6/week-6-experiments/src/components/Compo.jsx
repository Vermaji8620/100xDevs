import PropTypes from "prop-types";

const Compo = ({ game }) => {
  return <div>{game}</div>;
};

Compo.propTypes = {
  game: PropTypes.any.isRequired,
};

export default Compo;
