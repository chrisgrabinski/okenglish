import { fetchGraphQl } from "@lib/fetch-graphql";

export async function fetchContent(query = "", variables = {}) {
  const data = await fetchGraphQl(
    process.env.BLOG_ENDPOINT,
    {},
    query,
    variables
  );

  return data;
}

export async function getPostPaths() {
  const posts = [];
  let hasNextPage = true;
  let endCursor = "";

  const composeQuery = (after) => `
    {
      posts(first: 100, after: "${after}", where: { status: PUBLISH }) {
        edges {
          node {
            slug
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  while (hasNextPage === true) {
    const data = await fetchContent(composeQuery(endCursor));

    data?.posts?.edges?.map(({ node }) => {
      posts.push({
        params: node,
      });
    });

    hasNextPage = data?.posts?.pageInfo?.hasNextPage;
    endCursor = data?.posts?.pageInfo?.endCursor;
  }

  return posts;
}

export async function getPostData(slug) {
  const composeQuery = (slug) => `
    {
      post(id: "${slug}", idType: SLUG) {
        author {
          node {
            avatar {
              url
            }
            name
            slug
          }
        }
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
        content
        date
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            mediaItemUrl
          }
        }
        modified
        slug
        title
      }
    }
  `;

  const data = await fetchContent(composeQuery(slug));

  return data.post;
}
