export const strFinishCovid = oldStr => oldStr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
