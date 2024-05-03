<template>
  <h1>Lista de usuários</h1>
  <div>
    <div class="lista">
      <div v-for="item in listaPessoas" :key="item.id">
        <Usuario
          @selecionado="adicionarFavorito($event)"
          @removeSelecionado="removerFavorito($event)"
          :usuario="item"
          :isFavorito="isFavorito(item.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Usuario from "@/components/Usuario.vue"
import { useStore } from "@/stores/IndexStore.js"
import { computed } from "vue"

export default {
  components: {
    Usuario,
  },
  setup() {
    const usuario = useStore()
    const listaPessoas = computed(() => usuario.$state.listaPessoas)

    return {
      listaPessoas,
      isFavorito: usuario.isFavorito,
      adicionarFavorito: usuario.adicionarUsuario,
      removerFavorito: usuario.removerUsuario
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.lista {
  display: grid;
  margin: 0 20px;
  grid-template-columns: repeat(4, minmax(200px, 400px));
  justify-content: center;
  align-items: center;
  gap: 20px;
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
