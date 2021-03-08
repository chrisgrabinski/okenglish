import PropTypes from "prop-types";
import classNames from "classnames";

export default function Emphasis({ children, color }) {
  const commonClasses = "whitespace-nowrap border-b-4";
  const colorClasses =
    color === "primary" ? "border-secondary-300" : "border-primary-900";

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
