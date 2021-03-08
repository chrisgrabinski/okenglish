import PropTypes from "prop-types";
import classNames from "classnames";

import Anchor from "components/Anchor";

export default function Section({ className, children, id }) {
  const commonClassNames = "grid gap-16 rounded-4xl";
  const sectionClassNames = classNames(commonClassNames, className);

  return (
    <section>
      <Anchor id={id}>
        <div className="grid gap-16">{children}</div>
      </Anchor>
    </section>
  );
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  id: PropTypes.string,
};

Section.defaultProps = {
  className: null,
  children: null,
  id: null,
};
