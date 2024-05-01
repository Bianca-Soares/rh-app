<template>
  <h1>Lista de favoritos</h1>
  <div class="lista">
    <div v-for="item in listaFavoritos" :key="item.id">
      <div class="card">
        <div class="imagem-container">
          <img :src="item.avatar" alt="imagem avatar" />
        </div>
        <span>{{ item.first_name + " " + item.last_name }}</span>
        <a class="favorito" @click="removeFavorito(item.id)">
          <span>X</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  components: {},
  setup() {
    const listaFavoritos = ref([])

    onMounted(() => {
      listaFavoritos.value = []
    })

    function removeFavorito(idUsuario) {
      listaFavoritos.value = listaFavoritos.value.filter(
        (item) => item.id !== idUsuario
      )
    }

    return {
      listaFavoritos,
      removeFavorito
    }
  },
}
</script>

<style scoped>
.favorito span {
  font-size: 25px;
  color: #f04f47;
  text-align: center;
}
</style>
