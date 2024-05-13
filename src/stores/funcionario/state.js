const state = () => {
    return {
        justificativasDeFaltasGeral: [
            {
                id: 1,
                id_funcionario: 1,
                descricao: 'Falta por motivo de doença',
                datas: ['2024-04-01', '2024-04-02'],
                isAprovada: false,
                isAtendida: false
            },
            {
                id: 2,
                id_funcionario: 1,
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
                id_funcionario: 1,
                dataInicio: '2024-10-03',
                dataFim: '2024-10-20',
                isAprovada: false,
                isAtendida: false
            }
        ],
        funcionariosRequisicoesPendentes: [
            {
                id: 2,
                email: "lindsay.ferguson@reqres.in",
                first_name: "Lindsay",
                last_name: "Ferguson",
                avatar: "https://reqres.in/img/faces/8-image.jpg",
            },
            {
                id: 1,
                email: "michael.lawson@reqres.in",
                first_name: "Michael",
                last_name: "Lawson",
                avatar: "https://reqres.in/img/faces/7-image.jpg",
            }
        ],
        funcionariosRequisicoesAtendidas: []
    }
}

export default state