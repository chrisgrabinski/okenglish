import PropTypes from "prop-types";

export default function Grid({ children }) {
  return <div className="md:grid md:grid-cols-12 md:gap-4">{children}</div>;
}

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Grid.defaultProps = {
  children: null,
};
