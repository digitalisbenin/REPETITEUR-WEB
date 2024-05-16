<template>
  <div class="">
    <br />

    <div class="container w-full">
      <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
        <p class="text-gray-600 ml-3">Chargement en cours...</p>
      </div>
      <!-- <h3
        class="text-3xl font-medium text-gray-900  text-center mt-2 mb-4 font-serif text-start"
      >
        Répondre
      </h3>
      
        <button
          type="button"
          class="inline-flex  justify-end text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2"
        >
         
          <RouterLink to="/admin/demande/create"
            >Remplir le formulaire de demande</RouterLink
          >
        </button> -->
        <div class="flex justify-between w-full">
          <h3 class="text-3xl font-medium text-gray-900 mt-2 mb-4 font-serif">Répondre</h3>
          <button type="button" class="inline-flex justify-end text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2">
            <RouterLink to="/admin/messages">Ecrire un message</RouterLink>
          </button>
        </div>
      
    </div>
    
    <br />
    <!-- <div
      class="w-full max px-4 bg-neutral border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 overflow-y-auto"
    >
      <table
        class="w-full table-auto text-sm text-left text-gray-500  "
      >
        <thead
          class="text-lg text-gray-700 uppercase bg-gray-50 "
        >
          <tr>
            <th scope="col" class="px-6 py-3">N°</th>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">Message parents</th>

            <th scope="col" class="px-6 py-3">Reponse Admin</th>
          </tr>
        </thead>
        <tbody v-if="this.messagees.length > 0">
          <tr
            class="bg-white border-b text-lg dark:bg-gray-900 dark:border-gray-700"
            v-for="(matier, index) in this.messagees"
            :key="index"
          >
            <td class="px-6 py-4">
              {{ index + 1 }}
            </td>
            <td class="px-6 py-4">
              {{ formatDate(matier.created_at) }}
            </td>
            <td class="px-6 py-4">
              {{ matier.message }}
            </td>

            <td class="px-6 py-4">
              {{ matier.reponse_admin }}
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="1">Loading...</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div class="w-full max px-4 bg-neutral border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 overflow-y-auto">
        <table class="w-full table-responsive table-auto text-sm text-left text-gray-500">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3">N°</th>
                    <th scope="col" class="px-6 py-3">Date</th>
                    <th scope="col" class="px-6 py-3">Message</th>
                    <th scope="col" class="px-6 py-3">Réponse</th>
                </tr>
            </thead>
            <tbody v-if="this.messagees.length > 0">
                <tr class="bg-white border-b text-lg " v-for="(matier, index) in this.messagees.slice(0, 10)" :key="index">
                    <td class="px-6 py-4">{{ index + 1 }}</td>
                    <td class="px-6 py-4">{{ formatDate(matier.created_at) }}</td>
                    <!-- <td  class="px-6 py-4 whitespace-normal overflow-hidden overflow-ellispsis ">{{ matier.message }}</td> -->
                    <td class="px-6 py-4 whitespace-pre-wrap max-w-xs" style="word-wrap: break-word;  max-width: 150px;">
                      <!-- {{ matier.message }} -->
                      <a
                      href="#"
                      @click="openSecondModal(matier.id, matier.message)"
                      wire:loading.attr="disabled"
                      class="font-medium text-blue-600  hover:underline"
                      > Lire message</a
                    >
                  </td>
                    <td class="px-6 py-4">
                      <a
                      href="#"
                      @click="openModal(matier.id, matier.reponse_admin)"
                      wire:loading.attr="disabled"
                      class="font-medium text-blue-600  hover:underline"
                      >Lire réponse</a
                    >
                      </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="1">Loading...</td>
                </tr>
            </tbody>
        </table>
        
        <div
        v-if="isModalOpen"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div class="bg-white p-8 rounded-lg  md:w-[1250px] md:h-[725px] sm:w-full max-h-[85vh] overflow-y-auto">
          <div class="relative p-1 w-full">
            <!-- Modal content -->

            <!-- Modal header -->
            <div
              class="flex items-center justify-between p-4 md:p-5 border-b rounded-t "
            >
              <h3
                class="text-2xl font-semibold text-gray-900 "
              >
                Réponse Admin
              </h3>

              <button
                @click="closeModal"
                type="button"
                class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-hide="authentication-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5">
              
              <p class="text-xl" v-if="this.message">{{ this.message }}</p>
              <p class="text-xl" v-else>L'admin n'a pas encore répondu </p>

              
            </div>
          </div>
        </div>
      </div>
      <div
      v-if="isModalSecondOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-8 rounded-lg  md:w-[1250px] md:h-[725px] sm:w-full max-h-[85vh] overflow-y-auto">
        <div class="relative p-1 w-full">
          <!-- Modal content -->

          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t "
          >
            <h3
              class="text-2xl font-semibold text-gray-900 "
            >
              Message
            </h3>

            <button
              @click="closeSecondModal"
              type="button"
              class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
              data-modal-hide="authentication-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            
            <p class="px-6 py-4 text-xl whitespace-pre-wrap w-full" style="word-wrap: break-word;">{{ this.messaages }}</p>
          

            
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "reponse",
  data() {
    return {
      loading:true,
      user_id: "",
      messagees: [],
      isModalOpen: false,
      isModalSecondOpen: false,
      message:"",
      reponseId:"",
      messageId:"",
      messaages:"",
    };
  },
  mounted() {
    this.getUsers();

    this.$nextTick(() => {
      this.getMessage();
    });
  },
  methods: {
    openModal(enfantId, message) {
      this.isModalOpen = true;
      this.reponseId = enfantId;
      this.message = message;
      console.log(this.reponseId);
      console.log(this.message);
    },
    closeModal() {
      this.isModalOpen = false;
      
      this.reponseId = "";
      this.message = "";
      
    },
    openSecondModal(enfantIds, messager) {
      this.isModalSecondOpen = true;
      this.messageId = enfantIds;
      this.messaages = messager;
      console.log(this.messageId);
      console.log(this.messaages);
    },
    closeSecondModal() {
      this.isModalSecondOpen = false;
      
      this.messageId = "";
      this.messaages = "";
      
    },
    formatDate(dateTimeString) {
      const options = { year: "numeric", month: "2-digit", day: "2-digit" };
      const date = new Date(dateTimeString);

      // Récupérer les composants de la date
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0, donc ajout de 1
      const day = String(date.getDate()).padStart(2, "0");

      // Construire la date dans le format YYYY-MM-DD
      const formattedDate = `${day}-${month}- ${year}`;

      return formattedDate;
    },
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
          this.user_id = response.data.id;
          //   this.name=response.data.name
          //   this.phone=response.data.phone
          //   this.email=response.data.email
          //console.log(response.data.id);
          //console.log( this.user_id);
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

      this.getMessage();
    },
    getMessage() {
      setTimeout(() => {
        this.loading = false; // Set loading to false when data is fetched
      }, 2000);
      axios
        .get("https://apirepetiteur.wadounnou.com/api/messages")
        .then((res) => {
          this.messagees = res.data.data.filter(
            (result) => result.user.id === this.user_id
          );
          console.log(this.user_id);
          console.log(this.messagees);
        });
    },
  },
};
</script>
