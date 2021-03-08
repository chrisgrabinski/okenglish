import PropTypes from "prop-types";
import classNames from "classnames";

import Link from "next/link";

const sizes = ["small", "medium", "large"];

export default function ButtonLink({ children, href, isInverted, size }) {
  const commonClassNames =
    "inline-flex items-center bg-primary-900 font-medium text-white rounded-full";
  const colorClassNames = !isInverted
    ? "bg-primary-900 text-white"
    : "bg-white text-primary-900";
  const sizeClassNames =
    size === "small"
      ? "h-8 px-4 text-xs"
      : size === "medium"
      ? "h-12 px-6 text-sm"
      : "h-16 px-8";

  const buttonLinkClassNames = classNames(
    commonClassNames,
    colorClassNames,
    sizeClassNames
  );

  return (
    <Link href={href} passHref>
      <a className={buttonLinkClassNames}>{children}</a>
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  href: PropTypes.string.isRequired,
  isInverted: PropTypes.bool,
  size: PropTypes.oneOf(sizes),
};

ButtonLink.defaultProps = {
  children: null,
  isInverted: false,
  size: sizes[1],
};
