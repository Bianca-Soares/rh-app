const actions = {
  aprovarJustificativa(id, isAprovada) {
    let found = false
    this.justificativasDeFaltasGeral.forEach(item => {
      if (!found && item.id === id) {
        item.isAprovada = isAprovada
        item.isAtendida = true
        this.verificarRequisicoesAtendidasFerias(item.id_funcionario)
        found = true
      }
    })
  },
  aprovarFerias(id, isAprovada) {
    let found = false
    this.feriasGeral.forEach(item => {
      if (!found && item.id === id) {
        item.isAprovada = isAprovada
        item.isAtendida = true
        this.verificarRequisicoesAtendidasFaltas(item.id_funcionario)
        found = true
      }
    })
  },
  verificarRequisicoesAtendidasFaltas(idFuncionario) {
    const requisicoesNaoAtendidas = this.justificativasDeFaltasGeral.filter(
      item => item.id_funcionario === idFuncionario
    )
    if (!requisicoesNaoAtendidas.some(item => item.isAtendida === false)) {
      this.updateRequisicaoAtendida(idFuncionario)
    }
  },
  verificarRequisicoesAtendidasFerias(idFuncionario) {
    const requisicoesNaoAtendidas = this.feriasGeral.filter(
      item => item.id_funcionario === idFuncionario
    )
    if (!requisicoesNaoAtendidas.some(item => item.isAtendida === false)) {
      this.updateRequisicaoAtendida(idFuncionario)
    }
  },
  updateRequisicaoAtendida(idFuncionario) {
    const funcionarioAtendido = this.funcionariosRequisicoesPendentes.find(funcionario => funcionario.id === idFuncionario)
    this.funcionariosRequisicoesAtendidas.push(funcionarioAtendido)
    this.funcionariosRequisicoesPendentes = this.funcionariosRequisicoesPendentes.filter(
      funcionario => {
        return funcionario.id !== idFuncionario
      }
    )
  }
}

export default { ...actions }
