import PropTypes from "prop-types";

export default function Stack({ children }) {
  return <div className="grid gap-y-16 md:gap-y-32">{children}</div>;
}

Stack.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
