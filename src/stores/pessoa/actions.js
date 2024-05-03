const actions = {
  adicionarUsuario(idUsuario) {
    const usuarioSelecionado = this.listaPessoas.find(
      (x) => x.id == idUsuario
    )
    this.listaFavoritos = [...this.listaFavoritos, usuarioSelecionado]
  },
  removerUsuario(idUsuario) {
    this.listaFavoritos = this.listaFavoritos.filter(
      (x) => x.id !== idUsuario
    )
  }
}

export default { ...actions }
