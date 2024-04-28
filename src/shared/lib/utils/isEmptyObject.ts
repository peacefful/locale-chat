export const isNotEmptyObject = <T>(obj: T | undefined): boolean => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return true
    }
  }
  return false
}