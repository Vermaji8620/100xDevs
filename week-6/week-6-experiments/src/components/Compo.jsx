import PropTypes from "prop-types";

const Compo = ({ title, description }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {title}
        <hr />
        {description}
        <br />
        <br />
      </div>
    </div>
  );
};

Compo.propTypes = {
  title: PropTypes.any.isRequired,
  description: PropTypes.any.isRequired,
};

export default Compo;
