import PropTypes from "prop-types";

export default function Badge({ children }) {
  return (
    <div className="h-6 px-3 inline-flex items-center bg-primary-900 font-medium text-white text-xs rounded-full">
      {children}
    </div>
  );
}

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
