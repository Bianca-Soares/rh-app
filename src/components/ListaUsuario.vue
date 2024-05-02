<template>
  <h1>Lista de usuários</h1>
  <div>
    <div class="lista">
      <div v-for="item in listaPessoas" :key="item.id">
        <Usuario
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
      isFavorito: usuario.isFavorito
    }
  }
}
</script>

<style>
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
</style>
