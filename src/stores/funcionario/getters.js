const getters = {
    justificativasDeFaltas: (state) => (idFuncionario) =>
        state.justificativasDeFaltasGeral.filter(item => item.id_funcionario === idFuncionario),
    ferias: (state) => (idFuncionario) =>
        state.feriasGeral.filter(item => item.id_funcionario === idFuncionario),
}

export default { ...getters }
