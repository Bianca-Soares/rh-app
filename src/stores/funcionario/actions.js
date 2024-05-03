const actions = {
    aprovarJustificativa(id, isAprovada) {
        this.justificativasDeFaltasGeral.forEach(item => {
          if (item.id === id) {
            item.isAprovada = isAprovada
          }
        })
      },
    aprovarFerias(id, isAprovada) {
        this.feriasGeral.forEach(item => {
            if (item.id === id) {
                item.isAprovada = isAprovada
            }
        })
    }
}

export default { ...actions }
