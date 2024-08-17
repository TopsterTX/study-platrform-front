export const getPercentValue = (
  value: number,
  percent: number,
  round: 'floor' | 'round' | 'ceil' = 'floor'
): number => {
  return Math[round]((value / 100) * percent)
}
