<template>
  <h1>Gerenciar Funcionário</h1>
  <div class="imagem-container">
    <img :src="funcionario.avatar" alt="imagem avatar" />
  </div>
  <div class="two-column-layout">
    <div class="column-left">
      <Justificativa :funcionario="funcionario" />
    </div>
    <div class="column-right">
      <Ferias :funcionario="funcionario" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue"
import { useStore } from "@/stores/pessoa"
import { useRoute } from 'vue-router'
import Justificativa from "@/components/Justificativa.vue"
import Ferias from "@/components/Ferias.vue"

export default {
  components: { Justificativa, Ferias },
  setup() {
    const usuario = useStore()
    const router = useRoute()

    const listaPessoas = computed(() => usuario.$state.listaPessoas)
    const id = router.params.id
    const funcionario = listaPessoas.value.find((x) => x.id == id)

    return {
      listaPessoas,
      funcionario
    }
  },
}
</script>

<style scoped>

h1 {
  text-align: center;
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
.favorito span {
  font-size: 25px;
  color: #f04f47;
  position: relative;
}

.two-column-layout {
  display: flex;
}

.column-left,
.column-right {
  flex: 1;
  padding: 10px;
}
</style>
