<template>
  <nav class="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/favoritos">Atendidas</router-link></li>
    </ul>
    <div class="favorito">
      <img src="@/assets/star-svgrepo.svg" alt="favoritos" />
      <span >{{ totalPendentes }}</span>
    </div>
  </nav>
</template>

<script>

import { computed } from "vue"
import { useFuncionarioStore } from "@/stores/funcionario"

export default {
  setup() {
    const funcionario = useFuncionarioStore()
    const totalPendentes = computed(() => funcionario.totalPendentes)

    return {
      totalPendentes
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  background: #2c3e50;
}

.nav ul {
  display: flex;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav a {
  font-weight: bold;
  color: #ffff;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

.favorito {
  position: relative;
}

.favorito img {
  width: 30px;
}
.favorito span {
  width: 15px;
  height: 15px;
  position: absolute;
  background: #f3e012;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  top: 10px;
  right: 4px;
}
</style>
