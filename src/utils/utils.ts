/**
 * get character id inside the url property
 * @param url
 * @returns id
 */
export const getCharacterId = (url : string) : string => {
  // ..../10/
  // remove last /
  return url.split('/').slice(-2,-1)[0]
}