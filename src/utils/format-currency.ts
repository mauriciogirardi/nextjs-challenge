export function formatCurrency(value: number) {
  return Intl.NumberFormat('pt-PT', {
    currency: 'EUR',
    style: 'currency'
  }).format(value)
}
