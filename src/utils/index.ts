export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((acum, atual) => {
    if (atual.preco) {
      return acum + atual.preco
    }
    return acum
  }, 0)
}

export const currencyBrl = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

export const getDescription = (descricao: string) => {
  if (descricao.length > 132) {
    return descricao.slice(0, 129) + '...'
  }

  return descricao
}
