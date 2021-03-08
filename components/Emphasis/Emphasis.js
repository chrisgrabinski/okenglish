import PropTypes from "prop-types";
import classNames from "classnames";

export default function Emphasis({ children, color }) {
  const commonClasses = "whitespace-nowrap";
  const colorClasses =
    color === "primary" ? "bg-secondary-300" : "bg-primary-900";

  const emphasisClasses = classNames(commonClasses, colorClasses);

  return <span className={emphasisClasses}>{children}</span>;
}

Emphasis.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  color: PropTypes.oneOf(["primary", "secondary"]),
};

Emphasis.defaultProps = {
  children: null,
  color: "primary",
};
