import PropTypes from "prop-types";
import classNames from "classnames";

export default function Section({ className, children }) {
  const sectionClassNames = classNames("rounded-4xl", className);

  return <div className={sectionClassNames}>{children}</div>;
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Section.defaultProps = {
  className: "",
  children: null,
};
