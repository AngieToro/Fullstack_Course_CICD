export const normalizeBaseUrl = (url) => {
  return url.endsWith('/') ? url : `${url}/`
}