import PropTypes from "prop-types";
import { BreadcrumbJsonLd } from "next-seo";
import Link from "next/link";

import Container from "components/Container";

export default function Breadcrumbs({ items }) {
  const jsonLdItems = items.map((item, index) => ({
    ...item,
    position: index + 1,
  }));

  return (
    <div className="flex items-center h-16 text-sm sm:text-base">
      <Container>
        <ul className="flex flex-wrap">
          {items.map((item, index) => {
            const isLastItem = index === items.length - 1;

            return (
              <li key={item.name} className="flex items-center">
                {!isLastItem ? (
                  <>
                    <Link href={item.item} passHref>
                      <a>{item.name}</a>
                    </Link>
                    <svg viewBox="0 0 4 8" className="mx-2 h-4">
                      <polyline points="1 2, 3 4, 1 6" />
                    </svg>
                  </>
                ) : (
                  <span className="opacity-75">{item.name}</span>
                )}
              </li>
            );
          })}
        </ul>
      </Container>
      <BreadcrumbJsonLd itemListElements={jsonLdItems} />
    </div>
  );
}

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      item: PropTypes.string,
    }).isRequired
  ),
};

Breadcrumbs.defaultProps = {
  items: null,
};
