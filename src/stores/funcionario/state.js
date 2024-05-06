const state = () => {
    return {
        justificativasDeFaltasGeral: [
            {
                id: 1,
                id_funcionario: 2,
                descricao: 'Falta por motivo de doença',
                datas: ['2024-04-01', '2024-04-02'],
                isAprovada: false,
                isAtendida: false
            },
            {
                id: 2,
                id_funcionario: 2,
                descricao: 'Falta por motivo de consulta médica',
                datas: ['2024-04-05'],
                isAprovada: false,
                isAtendida: false
            },
            {
                id: 3,
                id_funcionario: 2,
                descricao: 'Falta por motivo de compromisso pessoal',
                datas: ['2024-04-10', '2024-04-11', '2024-04-12'],
                isAprovada: false,
                isAtendida: false
            }
        ],
        feriasGeral: [
            {
                id: 1,
                id_funcionario: 2,
                dataInicio: '2024-10-03',
                dataFim: '2024-10-20',
                isAprovada: false,
                isAtendida: false
            },
            {
                id: 2,
                id_funcionario: 2,
                dataInicio: '2024-09-15',
                dataFim: '2024-09-30',
                isAprovada: false
            },
            {
                id: 3,
                id_funcionario: 2,
                dataInicio: '2024-11-01',
                dataFim: '2024-11-15',
                isAprovada: false,
                isAtendida: false
            }
        ]
    }
}

export default state