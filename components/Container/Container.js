import PropTypes from "prop-types";

export default function Container({ children }) {
  return (
    <div className="w-full mx-auto" style={{ maxWidth: 1120 }}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
