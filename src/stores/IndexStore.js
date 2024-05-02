import { defineStore } from 'pinia'

export const useStore = defineStore('Usuario', {
    // state
    state(){
        return {
            listaPessoas : [
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
            ],
            listaFavoritos: [
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
                  }
            ]
        }
    },
    // actions
    actions: {
    },
    // getters
    getters: {
      totalFavoritos: (state) => state.listaFavoritos.length,
      isFavorito: (state) => (id) =>
        state.listaFavoritos.some(item => item.id === id),
  }
})
