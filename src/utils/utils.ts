/**
 * get id inside the url property
 * @param url
 * @returns id
 */
export const getCharacterId = (url : string) : string => {
  return url.split('/').slice(-2,-1)[0]
}