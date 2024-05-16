<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mt-12 p-4">
        <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
            <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <p class="text-gray-900 ml-3">Chargement en cours...</p>
          </div>
        <h3 class="text-3xl font-medium text-gray-900  font-serif text-start"> Présence au poste</h3><br>
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
                        Présence
                    </th>
                    <!-- <th scope="col" class="px-6 py-3">
                        Parents
                    </th> -->
                   
                
                   
                 <th scope="col" class="px-6 py-3">
                        Action
                    </th> 
                </tr>
            </thead>
            <tbody v-if="this.enfants.length > 0">
                <tr class="bg-white text-lg border-b " v-for="(apprenant,index) in this.enfants" :key="index">
                    <td class="px-6 py-4">
                        {{ apprenant.repetiteur.user.name }}  
                    </td>
                    <td class="px-6 py-4">
                        {{ formatDate(apprenant.created_at) }}
                    </td>
                    <td class="px-6 py-4">
                        <!-- {{ apprenant.poste }} -->
                        <span v-if="!apprenant.poste" class="bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">Non</span>
<span v-else class="bg-green-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Oui</span>
                    </td>
                    <!-- <td class="px-6 py-4">
                        {{ apprenant.enfants.parents.user.name }}
                    </td> -->
                   
                    <td class="flex items-center px-6 py-4 space-x-3" v-if="!apprenant.poste" >
                        <!--  <a href="#" wire:click="edit({{ $commande }})" wire:loading.attr="disabled"
                              class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Modifier</a>-->
                          <a href="#" @click="openModal(apprenant.id)"  wire:loading.attr="disabled"
                              class="font-medium text-blue-600 hover:underline">Présence au poste</a>
                      </td>
                    
                
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
        <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-8 rounded-md w-[900px]">
              <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                &times;
              </button>
              <div class="relative p-4 w-full">
                <!-- Modal content -->
                
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                        <h3 class="text-2xl font-semibold text-gray-900 ">
                        Présence au poste
                        </h3>
                        <button @click="closeModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                           
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <form @submit.prevent="updatePostes" class="space-y-4" action="#">
                            <!-- <div>
                                <label for="email" class="block text-start mb-2 text-xl font-medium text-gray-900 ">Observation</label>
                                <input type="text" name="email" v-model="content" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" required>
                            </div> -->
                            <div>
                                <label for="email" class="block text-start mb-2 text-xl font-medium text-gray-900 "> Présence au postes</label>
                                <input type="date" name="email" v-model="poste" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required>
                            </div>
                            <div>
                                <textarea id="message" v-model="message" rows="4" class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder=" appréciation (Optionnel)" ></textarea>
                            </div>
                            <br>
                          <div class="flex justify-end">
                            <button type="submit" class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">Envoyer</button>
                          </div>

                        </form>
                    </div>

            </div>
            </div>
          </div>


        


    </div>

    </template>
    <script>
      import axios from 'axios'
    export default {
      name: "presence",
      data() {
        return {
            loading: true,
            isModalOpen: false,
           
            role_id:'',
           
            user_id:'',
            selectedEnfant:'',
            etat:'',
            poste:'',
            
            content:'',
            matiere_id:'',
            classe_id:'',
            message:'',
            repetiteurs_id:'',
            repetiteurs:[],
            matiere:[],
            classe:[],
            enfants:[],
            enfantsfiltrer:[]
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
        openModal(enfantId) {
      this.isModalOpen = true;
      this.selectedEnfant = enfantId;
      //console.log(this.selectedEnfant);
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedEnfant = '';
      this.content = '';
      this.poste = '';
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

    axios.get('https://apirepetiteur.wadounnou.com/api/repetiteurs').then(res=>{
                this.repetiteurs = res.data.data.filter(repetiteur => repetiteur.user.id === this.user_id)
                  
                //console.log(this.repetiteurs)
                this.repetiteurs_id= this.repetiteurs[0].id
                this.etat=this.repetiteurs[0].etats
                //console.log(this.repetiteurs_id);
                //console.log(this.etat);

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
           await axios.get('https://apirepetiteur.wadounnou.com/api/presenceaupostes').then(res=>{
                this.enfants=res.data.data.filter(enfant => enfant.repetiteur.id === this.repetiteurs_id);
               // console.log(this.enfants)
             //   console.log(res.data.data)
              //  console.log(this.repetiteurs_id)
               
            });
           // console.log(enfants);
        },


        updatePostes(){
          
           
            const dataToSend = {


 poste:this.poste,
 message:this.message,

};
const token = localStorage.getItem('token');
           
          // console.log(token);
           const config={
               headers: {
       'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
     }
           };
           console.log(config);
console.log(dataToSend);
            axios.put( "https://apirepetiteur.wadounnou.com/api/presenceaupostes/"+ this.selectedEnfant,dataToSend,config ).then(res =>{

                console.log(res.data)
                //alert(res.data.message);
               this.closeModal();
            //    this.$router.push('/admin/presence')
            //    alert('Appréciation enregister avec succès')
                   
               if (res.data.data) {
                
                   // mythis.errorList="Appréciation enregister avec succès"
                   
                    //alert('Appréciation enregister avec succès')
                    Swal.fire({
                    title:"Appréciation enregister avec succès",
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                    this.$router.push('/admin/dashboard')
                  
                }
                else{
                   // mythis.errorList="une erreur s'est produite"
                }
             

            })
            .catch(function(error)
           {
           console.log(error);
           console.log(error.response);
          // console.log(error.message);
             
                if (error.reponse) {
                    if (error.response.status==422) {
                        Swal.fire({
                    title:"Quelques chose s'est mal passé veuillez réessayer plus tard",
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
                        mythis.errorList=error.response.data.errors;
                        console.log(error.response.data.errors);
                    }

            } else if (error.request){
                console.log(error.request);
            }else{
                console.log('Error'.error); 
            }
           }
            )
        }
       
      },
    };
    </script>