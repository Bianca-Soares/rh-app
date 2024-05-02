<template>
  <div class="card">
    <div class="imagem-container">
      <img :src="usuario.avatar" alt="imagem avatar" />
    </div>
    <span> Nome </span>
    <a class="favorito" >
      <img v-if="isFavorito" src="@/assets/star-svgrepo.svg" alt="favorito icone" />
      <img v-else src="@/assets/star-outline.svg" alt="favorito icone" />
    </a>
  </div>
</template>

<script>
export default {
  props: ["usuario", "isFavorito"]
}
</script>

<style>
.card {
  padding: 10px;
  background: #ffedec;
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
</style>
