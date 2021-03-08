import PropTypes from "prop-types";

import { Wrapper } from "./Anchor.styled";

export default function Anchor({ children, id }) {
  return <Wrapper id={id}>{children}</Wrapper>;
}

Anchor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  id: PropTypes.string,
};

Anchor.defaultProps = {
  children: null,
  id: null,
};
