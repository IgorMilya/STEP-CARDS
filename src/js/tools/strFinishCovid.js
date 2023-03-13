export const strFinishCovid = oldStr => {
  const newStr = oldStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return newStr
}
