<template>
  <h1>Requisições atendidas</h1>
  <div class="lista">
    <div v-if="funcionariosAtendidos" v-for="item in funcionariosAtendidos" :key="item.id">
      <div class="card">
        <div class="button"
          @click="redirectFuncionario(item.id)"
          @mouseover="isHover = true"
          @mouseleave="isHover = false"
          :class="{ 'hovered': isHover }"
        >
          <div class="imagem-container">
            <img :src="item.avatar" alt="imagem avatar" @click="redirectFuncionario(item.id)"/>
          </div>
        </div>
        <span>{{ item.first_name + " " + item.last_name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { onMounted, computed } from "vue";
import { useFuncionarioStore } from "@/stores/funcionario"
import { useRouter } from 'vue-router'

export default {
  components: {},
  setup() {
    const funcionario = useFuncionarioStore()
    const funcionariosAtendidos = computed(() => funcionario.$state.funcionariosRequisicoesAtendidas)

    const router = useRouter()

    const isHover = ref(false)

    const redirectFuncionario = (id) => {
      router.push({ name: 'Funcionario', params: { id } })
    }

    onMounted(() => {
    })

    return {
      redirectFuncionario,
      funcionariosAtendidos,
      isHover
    }
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}

a{
  text-decoration: none;
}

.lista {
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(4, minmax(200px, 400px));
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.favorito span {
  font-size: 20px;
  color: #f93535;
  text-align: center;
}

.card {
  padding: 10px;
  background: #ec8883;
  border-radius: 5px;
  position: relative;
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

.favorito {
  position: absolute;
  top: 10px;
  right: 5px;
  cursor: pointer;
}

.favorito img {
  width: 30px;
  margin: 0 auto;
}

.button {
  color: rgb(0, 0, 0);
  border-radius: 5px;
  cursor: pointer;
}

.button.hovered {
  color: #ffedec8d;
}
</style>
