<template>
  <div class="card">
    <div class="button"
      @click="redirectFuncionario(usuario.id)"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
      :class="{ 'hovered': isHover }"
    >
      <div class="imagem-container">
        <img :src="usuario.avatar" alt="imagem avatar" />
      </div>
      <span> {{ usuario.first_name + " " + usuario.last_name }} </span>
    </div>
    <a class="favorito" @click="mudarFavorito(usuario.id)">
      <img v-if="isFavorito" src="@/assets/star-svgrepo.svg" alt="favorito icone" />
      <img v-else src="@/assets/star-outline.svg" alt="favorito icone" />
    </a>
  </div>
</template>

<script>
import { ref } from "vue"
import { useRouter } from 'vue-router'

export default {
  props: ["usuario", "isFavorito"],
  emits: ["selecionado", "removeSelecionado"],
  setup(prop, { emit }) {
    const favorito = ref(false)

    const router = useRouter()

    const isHover = ref(false)

    const redirectFuncionario = (id) => {
      router.push({ name: 'Funcionario', params: { id } })
    }

    function mudarFavorito(idUsuario) {
      favorito.value = !favorito.value

      if (favorito.value) {
        emit("selecionado", idUsuario)
        return
      }

      emit("removeSelecionado", idUsuario)
    }

    return { redirectFuncionario, mudarFavorito, favorito, isHover }
  }
}
</script>

<style scoped>
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
