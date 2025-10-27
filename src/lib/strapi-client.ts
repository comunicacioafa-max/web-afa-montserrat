const {STRAPI_HOST, STRAPI_READ_TOKEN} = process.env

export function strapiClient(url: string) {
  return fetch(`${STRAPI_HOST}/api/${url}`, {
    cache: 'force-cache',
    headers: {
      Authorization: `Bearer ${STRAPI_READ_TOKEN}`
    }
  }).then(res => res.json())
}
