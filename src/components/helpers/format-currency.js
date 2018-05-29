export const formatCurrency = val => {
  return '£' + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
