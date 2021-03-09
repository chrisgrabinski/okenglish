import PropTypes from "prop-types";

import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({ children, logo }) {
  return (
    <>
      <Header logo={logo} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

Layout.defaultProps = {
  children: null,
};
