<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-12 p-4">
        <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <p class="text-gray-900 ml-3">Chargement en cours...</p>
          </div>
        <h3 class="text-3xl font-medium text-gray-900  font-serif text-start">Observations</h3><br>
        <div class="flex items-center justify-between pb-4">
            <div class="relative">
                <!-- <label class="relative inline-flex items-center me-5 cursor-pointer">
                    <input type="checkbox"  value="isDisponible" @change="test" class="sr-only peer" checked>
                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                    <span class="ms-3 text-lg font-medium text-gray-900 dark:text-gray-300">{{ isDisponible }}</span>
                  </label> -->
            </div>
            <div>
               
               <!-- <button  type="button" class="inline-flex text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> -->
                  <!-- <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
              </svg> -->
              <!-- <RouterLink to="/admin/repetiteur/create">Postuler pour être répétiteur</RouterLink>
              </button> -->
                 <!-- <button  @click="openSecondModal" type="button" class="inline-flex text-white bg-green-700 hover:bg-green-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                     <svg class="w-[14px] h-[14px] text-white dark:text-white mt-1 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 1v16M1 9h16" />
                </svg>
                Ajouter votre classe et matiere
                </button> -->
            </div>
        </div>
        <table class="w-full table-auto text-sm text-left text-gray-500 ">
            <thead class="text-lg text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Noms & Prénoms
                    </th>
                   
                    <th scope="col" class="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Appréciation sur le répétiteur
                    </th>
                    <!-- <th scope="col" class="px-6 py-3">
                        Parents
                    </th> -->
                   
                
                   
                 <th scope="col" class="px-6 py-3">
                        Réponse admin
                    </th> 
                </tr>
            </thead>
            <tbody v-if="this.enfants.length > 0">
                <tr class="bg-white text-lg border-b " v-for="(apprenant,index) in this.enfants" :key="index">
                    <td class="px-6 py-4">
                        {{  apprenant.demande.repetiteur.user.name }}    
                    </td>
                    <td class="px-6 py-4">
                        {{ formatDate(apprenant.created_at) }}
                    </td>

                    <td class="px-6 py-4 whitespace-pre-wrap max-w-xs" style="word-wrap: break-word;  max-width: 150px;">
                      <!-- {{ matier.message }} -->
                      <a
                      href="#"
                      @click="openSecondModal(apprenant.id, apprenant.appreciation_parents)"
                      wire:loading.attr="disabled"
                      class="font-medium text-blue-600  hover:underline"
                      > Lire message</a
                    >
                  </td>
                    <td class="px-6 py-4">
                      <a
                      href="#"
                      @click="openModal(apprenant.id, apprenant.reponse_admin)"
                      wire:loading.attr="disabled"
                      class="font-medium text-blue-600  hover:underline"
                      >Lire réponse</a
                    >
                      </td>
                   
                   
                    <!-- <td class="flex items-center px-6 py-4 space-x-3" >
                        {{ apprenant.reponse_parents }} -->
                        <!--  <a href="#" wire:click="edit({{ $commande }})" wire:loading.attr="disabled"
                              class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>-->
                          <!-- <a href="#" @click="openModal(apprenant.id)"  wire:loading.attr="disabled"
                              class="font-medium text-blue-600 hover:underline">Présence au poste</a> -->
                      <!-- </td> -->
                    
                
                    <!-- <td class="flex items-center px-6 py-4 space-x-3">
                        <a href="#" wire:click="edit({{ $commande }})" wire:loading.attr="disabled"
                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>
                        <a href="#" wire:click="delete({{ $commande }})" wire:loading.attr="disabled"
                            class="font-medium text-red-600 dark:text-red-500 hover:underline">Supprimer</a>
                    </td> -->
                </tr>
               
            </tbody>
            <tbody v-else>
                <tr>
                <td colspan="5">
                Loading...
                </td></tr>  
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
              
              <p class="text-xl" v-if="this.messagee">{{ this.messagee }}</p>
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

    </template>
    <script>
      import axios from 'axios'
    export default {
      name: "observation",
      data() {
        return {
            loading: true,
            
            role_id:'',
           
            user_id:'',
           
            etat:'',
            poste:'',
            
            content:'',
            matiere_id:'',
            classe_id:'',
            message:'',
            messagee:'',
            parentss_id:'',
            parents:[],
            
            enfants:[],
            enfantsfiltrer:[],

            isModalOpen: false,
      isModalSecondOpen: false,
      
      reponseId:"",
      messageId:"",
      messaages:"",
        };
      },
      // created() {
      //   this.form.local = this.$i18n.locale;
      // },
      mounted(){
      this.getrepetiteur();
      this.$nextTick(() => {
    this.getEnfants();
  });
    },
      methods: {
        openModal(enfantId, message) {
      this.isModalOpen = true;
      this.reponseId = enfantId;
      this.messagee = message;
      console.log(this.reponseId);
      console.log(this.message);
    },
    closeModal() {
      this.isModalOpen = false;
      
      this.reponseId = "";
      this.messagee = "";
      
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
      async  getrepetiteur(){

            const token = localStorage.getItem('token');
                const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };

      //console.log(config);

      // Requête pour récupérer le profil
      const profileResponse  = await axios.get('https://apirepetiteur.wadounnou.com/api/profile', config);
        //console.log(profileResponse);
      // Stocker les données du profil dans le composant ou Vuex
      this.role_id = profileResponse.data.role_id;
      this.user_id = profileResponse.data.id;
      //console.log(this.role_id);
      //console.log(this.user_id);

   

    //         });
            axios.get("https://apirepetiteur.wadounnou.com/api/parents").then((res) => {
        this.parents = res.data.data.filter(
          (parent) => parent.user.id === this.user_id
        );

       // console.log(this.parents);
        this.parentss_id = this.parents[0].id;
        console.log(this.parentss_id);
      });
            this.getEnfants();
  },
       async getEnfants(studentId){
        setTimeout(() => {
        this.loading = false; // Set loading to false when data is fetched
      }, 7000);
            const repetiteur_id = localStorage.getItem('repetiteur_id');
           // console.log(repetiteur_id);
           // console.log(studentId)
           // console.log(this.repetiteurs_id);
           await axios.get('https://apirepetiteur.wadounnou.com/api/appreciations').then(res=>{
            console.log(res.data.data)
                this.enfants=res.data.data.filter(enfant => enfant.parents.id === this.parentss_id);
                console.log(this.enfants)
                console.log(res.data.data)
                console.log(this.parentss_id)
            });
           // console.log(enfants);
        },

       
      },
    };
    </script>