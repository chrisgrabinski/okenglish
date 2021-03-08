import PropTypes from "prop-types";
import classNames from "classnames";

export default function Card({ children, isHighlight }) {
  const commonClassNames =
    "relative flex flex-col h-full px-6 py-8 rounded-4xl overflow-hidden";
  const defaultClassNames = classNames(
    commonClassNames,
    "border-4 border-secondary-200"
  );
  const highlightClassNames = classNames(
    commonClassNames,
    "bg-primary-900 text-white"
  );

  return (
    <div className={!isHighlight ? defaultClassNames : highlightClassNames}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  isHighlight: PropTypes.bool,
};

Card.defaultProps = {
  children: null,
  isHighlight: false,
};
