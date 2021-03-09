export async function fetchGraphQl(url, headers, query = "", variables = {}) {
  const body = JSON.stringify({
    query,
    variables,
  });

  const result = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body,
  }).then((response) => response.json());

  return result.data;
}
