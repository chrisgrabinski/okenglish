import PropTypes from "prop-types";

export default function Container({ children }) {
  return (
    <div className="px-4">
      <div className="w-full max-w-5xl mx-auto">{children}</div>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
