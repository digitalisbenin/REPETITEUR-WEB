>
<template>
  <div class="flex h-screen">
    
   
   <div class=" w-1/6 shadow-2xl bg-gray-800 text-white ">
    <div class="flex items-center justify-between">
      <div class="flex">
        <img src="../../assets/encadreur.png" alt="Logo" class="h-20 mt-1" />
      </div>
      <button @click="toggleNav" class="flex md:hidden mt-6 text-white hover:text-gray-100 focus:outline focus:text-gray-400">
        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
          <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
        </svg>
      </button>
    </div>
    <div
    class=" " :class="{ 'hidden': isNavOpen }"
    v-if="
      $route.name !== 'dashboard' &&
      $route.name !== 'repetiteurCreate' &&
      $route.name !== 'epreuve' &&
      $route.name !== 'profile' &&
      $route.name !== 'message' &&
      $route.name !== 'reponse' &&
      $route.name !== 'presence'&&
      $route.name !== 'observation'
    
    "
  >
  <!-- <div class="flex">
    <img
    src="../../assets/Repetiteur.png"
    alt="Logo"
    class="h-24 mt-1"
  /> -->
  <!-- <button
  @click="toggleNav"
  class=" flex md:hidden mt-10 text-white hover:text-gray-400 focus:outline focus:text-gray-400"
>
  <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
    <path
      fill-rule="evenodd"
      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    ></path>
  </svg>
</button> -->
<!-- <button @click="toggleNav" class="flex md:hidden mt-10 text-white hover:text-gray-400 focus:outline focus:text-gray-400">
  <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
  </svg>
</button>

  </div> -->

  

   

    <ul class="py-4 text-lg text-start">
      

      <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white-950 hover:text-gray-300"
          active-class="text-green-600"
          to="/admin/demande"
          >Demandes</router-link
        >
      </li>
      <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white hover:text-gray-300"
          active-class="text-green-600"
          to="/admin/payements"
          >Paiements</router-link
        >
      </li>
    
      <!-- <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white hover:text-gray-300"
          active-class="text-green-600"
          to="/admin/messages"
          >Boite d'envois</router-link
        >
      </li> -->
      <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white hover:text-gray-300"
          active-class="text-green-600"
          to="/admin/reponses"
          >Répondre</router-link
        >
      </li>
      <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white hover:text-gray-300"
          active-class="text-green-600"
          to="/admin/appreciation"
          >Boites de réceptions</router-link
        >
      </li>
      <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white hover:text-gray-300"
          active-class="text-green-600"
          to="/admin/epreuves"
          >Bibliothèques</router-link
        >
      </li>
      <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white hover:text-gray-300"
          active-class="text-green-600"
          to="/admin/observations"
          >Observations</router-link
        >
      </li>
      <li class="px-4 py-2 hover:bg-gray-600">
        <router-link
          class="text-white hover:text-gray-300"
          active-class="text-green-600"
          to="/"
          >Aller sur le site</router-link
        >
      </li>
      <!-- <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/livreurDash">Livreurs</router-link></li>
          <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/livraisonDash">Livraisons</router-link></li>
         <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/reservationDash">Reservations</router-link></li>
         <li class="px-4 py-2 hover:bg-gray-600"><router-link class="text-white-950 hover:text-gray-300" active-class="text-green-600" to="/profils">Profils</router-link></li> -->
      <li
       
        class="px-4 py-2 hover:bg-gray-600 text-white-950 hover:text-gray-300"
        active-class="text-green-600"
      >
        <a href=""  @click.prevent="logout" onclick="window.scrollTo(0, 0);" >Deconnexion</a>
      </li>
    </ul>
  </div>
  <div v-else class="w-1/8 shadow-2xl bg-gray-800 text-white">
    <!-- <img
      src="../../assets/Repetiteur.png"
      alt="Logo"
      class="h-24 mt-1 mx-5"
    /> -->

    <!-- <div class="p-4 text-2xl font-bold">Dashboard</div>
      <p  class="px-4 py-2 hover:bg-gray-600 text-center text-lg "> {{ name }}</p> -->
    <div :class="{ 'hidden': isNavOpen }">
      <ul class="py-4 text-lg">
        <!-- ... Autres éléments du menu ... -->
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white-950 hover:text-gray-300"
            active-class="text-green-600"
            to="/admin/profil"
            >Profils</router-link
          >
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white-950 hover:text-gray-300"
            active-class="text-green-600"
            to="/admin/dashboard"
            >Tableau de bord</router-link
          >
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white-950 hover:text-gray-300"
            active-class="text-green-600"
            to="/admin/presence"
            >Présence au poste</router-link
          >
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white-950 hover:text-gray-300"
            active-class="text-green-600"
            to="/admin/observation"
            >Observation</router-link
          >
        </li>
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white-950 hover:text-gray-300"
            active-class="text-green-600"
            to="/admin/epreuve"
            >Bibliothèques</router-link
          >
        </li>
        <!-- <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white-950 hover:text-gray-300"
            active-class="text-green-600"
            to="/admin/message"
            >Boite d'envois</router-link
          >
        </li> -->
        <li class="px-4 py-2 hover:bg-gray-600">
          <router-link
            class="text-white-950 hover:text-gray-300"
            active-class="text-green-600"
            to="/admin/reponse"
            >Boites de réceptions</router-link
          >
        </li>
  
        <li class="px-4 py-2 hover:bg-gray-600">
          <a href="" @click.prevent="logout">Déconnexion</a>
        </li>
        <!-- ... Autres éléments du menu ... -->
      </ul>
    </div>
  </div>
   </div>

    <!-- Contenu du tableau de bord -->
    <div class="w-full p-4">
      <slot />
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Dashboard from "./dashboard.vue";
import axios from "axios";

export default {
  name: "AdminLayout",
  data() {
    return {
      name: null,
      
      isNavOpen: false
    };
  },
  mounted() {
    this.getUsers();
  },

  methods: {
    getUsers() {
      const token = localStorage.getItem("token");

      //console.log(token);
      const config = {
        headers: {
          Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
        },
      };
      //console.log(config);
      axios
        .get("https://apirepetiteur.wadounnou.com/api/profile", config)
        .then((response) => {
          this.name = response.data.name;
          localStorage.setItem("name", response.data.name);
          //this.$store.commit('setUserId',this.user_id)
          //userIds=this.userId;
          //console.log(response.data.name);
        })
        .catch((error) => {
          if (error.response === 401) {
            this.error =
              "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
            // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
          } else {
            this.error =
              "Une erreur s'est produite. Veuillez réessayer plus tard.";
          }
        });
    },
    toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  },

    async logout() {
      console.log("La fonction logout est déclenchée !");
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };

      //console.log(config);

      try {
        const response = await axios.get(
          "https://apirepetiteur.wadounnou.com/api/logout",
          config
        );
        console.log(response);
        if (response.status === 204) {
          // TokenService.removeToken();
          localStorage.removeItem("token");
          this.$router.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
