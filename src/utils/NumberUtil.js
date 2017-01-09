export const clamp = (value, min, max) => (
  Math.min(Math.max(value, min), max)
)

export const getNotExistMinPositiveInt = array => {
  const length = array.length
  for (let min = 0; min < length; ++min) {
    if (!array.some(value => value === min)) {
      return min
    }
  }
  return length
}

export const getMinPositiveInt = array => {
  const length = array.length
  if (length === 0) return 0
  let min = Number.MAX_SAFE_INTEGER
  array.forEach(value => {
    min = Math.min(min, value)
  })
  return min
}
