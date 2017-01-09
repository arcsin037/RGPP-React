export const getNotExistMinUInt = array => {
  const length = array.length
  for (let min = 0; min < length; ++min) {
    if (!array.some(value => value === min)) {
      return min
    }
  }
  return length
}

export const getMinUInt = array => {
  const length = array.length
  if (length === 0) return 0
  let min = Number.MAX_SAFE_INTEGER
  array.forEach(value => {
    min = value >= 0 ? Math.min(min, value) : min
  })
  return min
}
