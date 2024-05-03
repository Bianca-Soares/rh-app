const getters = {
  totalFavoritos: (state) => state.listaFavoritos.length,
  isFavorito: (state) => (id) =>
    state.listaFavoritos.some(item => item.id === id)
}

export default { ...getters }
