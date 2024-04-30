<template>
  <h1>Lista de usuários</h1>
  <div>
    <div class="lista">
      <div v-for="item in listaPessoas" :key="item.id">
        <Usuario :usuario="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import Usuario from "@/components/Usuario.vue";
export default {
  components: {
    Usuario,
  },
  setup() {
    const listaPessoas = [
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      }
    ]
    return {
      listaPessoas
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
