const TEN = 10

export const concatZeroToIndex = (index) => (
  index < TEN ? `0${index + 1}` : index + 1
)
