export const getLastId = (url: string): number => {
  const parts = url.split('/')
  const lastPart = parts[parts.length - 1]
  return +lastPart
}
