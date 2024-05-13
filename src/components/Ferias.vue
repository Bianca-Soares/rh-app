<template>
    <div class="card card-header-white">
        <div class="container">
            <div class="row justify-content-center">
                <div class="card-header bg-color-cyan text-white col-md-8">
                    Pedidos de Férias
                </div>
            </div>
        </div>
    </div>
    <div v-for="item in ferias(funcionario.id)" :key="item.id">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div
                            :class="{ 'card-header': true, 'bg-color-cyan': item.isAprovada, 'bg-color-pink': !item.isAprovada }">
                            Informações Férias Código {{ item.id }}
                        </div>
                        <div class="card-body">
                            <div class="form-group row">
                                <div class="col-4">
                                    <label>Data Início:</label>
                                    <input type="text" class="form-control" :value="item.dataInicio" disabled>
                                </div>
                                <div class="col-4">
                                    <label>Data Fim:</label>
                                    <input type="text" class="form-control" :value="item.dataFim" disabled>
                                </div>
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="isAprovada"
                                    v-model="item.isAprovada" disabled>
                                <label class="form-check-label" for="isAprovada">Aprovado</label>
                            </div>
                            <button class="btn btn-primary bg-color-cyan float-end mx-4"
                                @click="editMode = true, isAprovada = false, idSelecionado = item.id">Reprovar</button>
                            <button class="btn btn-primary bg-color-cyan float-end"
                                @click="editMode = true, isAprovada = true, idSelecionado = item.id">Aprovar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" tabindex="-1" role="dialog" :class="{ 'd-block': editMode }">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirmar</h5>
                    </div>
                    <div class="modal-footer">
                        <button v-if="!item.isAtendida" type="button" class="btn btn-secondary" @click="editMode = false">Fechar</button>
                        <button v-if="!item.isAtendida" type="button" class="btn btn-primary bg-color-cyan"
                            @click="aprovarFerias(idSelecionado, isAprovada), editMode = false">Salvar mudança</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import { useFuncionarioStore } from "@/stores/funcionario"

export default {
    props: ["funcionario"],
    setup(prop) {
        const funcionarioStore = useFuncionarioStore()
        const isAprovada = ref(false)
        const editMode = ref(false)
        const idSelecionado = ref(0)


        return {
            editMode,
            isAprovada,
            idSelecionado,
            ferias: funcionarioStore.ferias,
            aprovarFerias: funcionarioStore.aprovarFerias,
        }
    }
}
</script>

<style scoped>
.bg-color-cyan {
    background-color: #305d8a !important;
    border-color: #2c3e50;
    color: #ffffff;
}

.bg-color-pink {
    background-color: #d24747 !important;
    border-color: #d24747 !important;
    color: #0d0101 !important;
}

.card {
    padding: 10px;
    background: #ffedec;
    border-radius: 5px;
    position: relative;
}

.card-header-white {
    padding: 10px;
    border-radius: 5px;
    position: relative;
    margin-top: 30px;
    text-align: center;
    background-color: #ffffff !important;
}

.imagem-container {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    padding-top: 10px;
}

.imagem-container img {
    border-radius: 50%;
}

.card span {
    margin-top: 10px;
    display: block;
    text-align: center;
}
</style>
