import PropTypes from "prop-types";

const Compo = ({ title, description }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        {title}
        <hr />
        {description}
        <hr />
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
