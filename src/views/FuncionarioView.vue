<template>
    <h1>Gerenciar Funcionário</h1>
    <div class="imagem-container">
        <img :src="funcionario.avatar" alt="imagem avatar" />
    </div>
  </template>
  
  <script>
  import { onMounted, computed } from "vue";
  import { useStore } from "@/stores/IndexStore.js"
  import { useRoute } from 'vue-router'
  
  export default {
    components: {},
    setup() {
      const usuario = useStore()
      const router = useRoute()

      const listaPessoas = computed(() => usuario.$state.listaPessoas)
      const id = router.params.id
      const funcionario = listaPessoas.value.find((x) => x.id == id)
  
      onMounted(() => {
      })
  
      return {
        listaPessoas,
        funcionario
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
  