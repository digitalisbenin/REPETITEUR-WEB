
<template>
    <div class="">
        <br>
        <div class="container w-full mx-auto my-auto " >
            <h3 class="text-3xl font-medium text-gray-900 text-center text-start mt-4 mb-4 font-serif">Formulaire de demande</h3>
            <div class="w-full max px-4 bg-neutral border border-gray-200 rounded-lg shadow sm:p-12 md:p-6">
                
                <form class="space-y-6" action="POST" @submit.prevent="saveDemande" enctype="multipart/form-data">
                    <ul class="bg-green-300 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
                        <li class="mb-0 ms-3" >
                        {{ this.errorList }}

                        </li>
                    </ul>
                    <div class="grid gap-6 mb-3 md:grid-cols-2">
                        <div class="">
                            <label
                              for="email"
                              class="block text-start mb-1 text-2xl font-medium text-gray-900 "
                              >Nom de l'enfant</label
                            >
                            <input
                              type="text"
                              name="email"
                              v-model="fname"
                              id="email"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder="Nom"
                              required
                            />
                          </div>
                          <div class="">
                            <label
                              for="email"
                              class="block text-start mb-1 text-2xl font-medium text-gray-900 "
                              >Prénoms de l'enfant</label
                            >
                            <input
                              type="text"
                              name="email"
                              v-model="lname"
                              id="email"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder="Prénoms"
                              required
                            />
                          </div>
                          <div>
                            <label
                              for="email"
                              class="block text-start mb-1 text-2xl font-medium text-gray-900 "
                              >Sexe</label
                            >
                            <select
                              id="countries"
                              v-model="sexe"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              required
                            >
                              <option value="">
                                Sélectionner le sexe de l'enfant
                              </option>
                              <option value="Homme" required>Homme</option>
                              <option value="Femme">Femme</option>
                            </select>
                          </div>
                          <div class="">
                            <label
                              for="email"
                              class="block text-start mb-1 text-2xl font-medium text-gray-900 "
                            >
                              Votre Téléphone</label
                            >
                            <input
                              type="number"
                              name="email"
                              v-model="phone"
                              id="email"
                              class="bg-gray-50 border  border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                              placeholder="Téléphone"
                              required
                            />
                          </div>
                         
                    
                       
    
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="email" class="block text-start mb-1 text-2xl font-medium text-gray-900">Votre adresse</label>
                            <input type="text" name="email" v-model="adresses" id="email" class="bg-gray-50 mb-0 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="adresse" required />
                        </div>
                        <!-- <div class="">
                            <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 ">Information concernant l'enfant</label>
                        <select id="countries" v-model="enfants_id"  class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                        
            
                        <option v-for="(enfant,index) in this.enfants" :key="index" :value="enfant.id" >{{ enfant.fname }} {{ enfant.lname }}</option>
                      
                        </select>
                        </div> -->
                        <div class="">
                            <label for="countries" class="block text-start mb-1 text-2xl font-medium text-gray-900 ">Classe</label>
                        <select id="countries" v-model="classe_id"   @change="getPrix" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                        <!-- <option selected  >Choisir votre classe</option> @change="getPrix"  -->
    
                        <option v-for="(classe,index) in this.classes" :key="index" :value="classe.id" >{{ classe.name }}</option>
    
                        </select>
                        </div>
    
                    </div>
                    <h4 class="text-2xl">Information concernant la demande</h4>
                    <hr>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div class="">
                            <label for="countries" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Matière</label>
                        <select id="countries" v-model="matiere_id" @change="getPrix"  class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                        <!-- <option selected  >Choisir vos matières</option>  @change="getClasse"          -->
            
                        <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
                      
                        </select>
                        </div>
                       
                        <!-- <div class="flex-1">
                            <label for="phone" class="block  mb-2 px-3 text-2xl font-medium text-gray-900 dark:text-white">Prix en FCFA</label>
                             <input type="text" readonly  v-model="prix" name="phone"  id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=""> 
                             <span class="block w-1/3 text-3xl font-medium text-gray-900 dark:text-white" >FCFA</span>
                        </div> -->
                        <div class="">
                            <label for="phone" class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900">Rémumération</label>
                            <div class="flex items-center space-x-2">
                                <input type="text" readonly v-model="prix" @change="getRepetiteur" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  text-right" placeholder="">
                            <!-- <span class="text-2xl font-medium text-gray-900 dark:text-white">FCFA</span> -->
                            </div>
                            
                        </div>
                        
    
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div class="flex-1">
                            <label for="phone"  class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900">Matricule du répétiteur</label>
                           <input type="text"  v-model="matricule" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required>
                            <div  v-if="matricule.length > 0 && repetiteurs.length > 0"> 
                            <h2></h2>
                           
                            <ul class="py-4"  >
                
                             <li  class="px-4 py-2 text-xl"><span>{{ repetiteurs[0].repetiteur.user.name }}, {{ repetiteurs[0].repetiteur.adresse }}</span> </li>
                             
                            
                             
                
                          </ul>
                        </div>
                        <div v-else-if="matricule.length > 0" class="text-lg">
                          Ce matricule n'exite pas
                      </div>
                        <div v-else>
                          
                        </div>
                       </div>
    
                        <!-- <div class="flex-1">
                            <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Répétiteur</label>
                            <select  id="countries" v-model="repetiteur_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                            <option selected  >Choisir un répétiteur</option>

                            <option v-for="(repetiteur,index) in this.repetiteurs" :key="index" :value="repetiteur.repetiteur.id" >{{ repetiteur.repetiteur.user.name }} </option>

                            </select>
                        </div> -->
                        <div class="">
                        <label for="phone" class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900 ">Informations Complementaires</label>
                            <input type="text"  v-model="adresse" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" >
                        </div>

                    </div>

                    <div class="flex justify-end">
                        <button type="submit" class=" my-3 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">Envoyer</button>
                    </div>


                </form>
            </div>
        </div>
        <br><br><br>
    
    </div>
   
</template>
<script>
 import axios from 'axios'
export default {
    name:'demandecreate',
    data(){
        return{
            repetiteurs:[],
            tarification:[],
            enfants:[],
            parents:[],
            errorList:'',
            user_id:'',
            parents_id:'',
            enfants_id:'',
            classe_id:'',
            matricule:'',
            tarification_id:'',
            demande_id:'',
            classe:[],
            classes:[],
            repetit:[],
            admin:[],
            admin_id:'',
          
            matiere:[],
            prixe:[],
            matiere_id:'',
            repetiteur_id:'',
            adresse:'',
            prix:'',
            fname:'',
            lname:'',
            phone:'',
            adresses:'',
            sexe:'',
            enfantId:'',
                    

            
        }
    },
    created() {
    // Accéder à l'ID du répétiteur passé en paramètre de la route
    const repetiteurId = this.$route.params.repetiteurId;
    console.log("ID du répétiteur:", repetiteurId);
    this.getRepetiteur(this.$route.params.repetiteurId);
    
    // Utilisez l'ID du répétiteur comme nécessaire dans ce composant
  },
    mounted(){
        this.getUsers();
        //this.getRepetiteur();
        // this.getAdmin();
        // this.getMatiere();
        
      this.$nextTick(() => {
    this.getParents();
    this.getEnfants();
  });
      //  console.log('I am here')
    //   this.getTarification();
     
    //   this.getClasses();
    },
    methods:{
        getUsers (){
            const token = localStorage.getItem('token');
           
           // console.log(token);
            const config={
                headers: {
        'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
      }
            };
           // console.log(config);
     axios.get('https://apirepetiteur.wadounnou.com/api/profile',config)
    .then(response => {
      this.user_id = response.data.id;
    //   console.log(response);
    //   console.log(response.data.id);
    //   console.log( this.user_id);
    })
    .catch(error => {
      if (error.response === 401) {
        this.error = "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
        // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
      } else {
        this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
      }
    });
    //this.getParents();

    axios.get('https://apirepetiteur.wadounnou.com/api/users').then(res=>{
                this.admin = res.data.data.filter(result =>
                   result.name === 'Supper Admin'

                    );
                    this.admin_id=this.admin[0].id
                   // console.log(res.data.data);
                   // console.log(this.model.matiere_id);
                // console.log(this.admin)
                // console.log(this.admin_id)
                // console.log(res)
            });
           

            

            axios.get('https://apirepetiteur.wadounnou.com/api/tarifications').then(res=>{
                this.tarification=res.data.data
                // console.log(this.tarification)
                // console.log(res)
            });

            axios.get('https://apirepetiteur.wadounnou.com/api/classes').then(res=>{
                this.classes= res.data.data;
                // console.log(this.classe)
                // console.log(res)
            });

            axios.get('https://apirepetiteur.wadounnou.com/api/matieres').then(res=>{
                this.matiere= res.data.data
                // console.log(this.matiere)
                // console.log(res)
            });
            axios.get('https://apirepetiteur.wadounnou.com/api/enfants').then(res=>{
                this.enfants=res.data.data.filter(result =>
                // result.status ==='Terminer' &&
                    result.parents.id === this.parents_id
                       
                    );
                // console.log(this.enfants)
                // console.log(res)
            });
            this.getPrix();
            this.getParents();
  
        },
        getParents(){
            const token = localStorage.getItem('token');
             console.log('test');
            // console.log(this.user_id);
            
            axios.get('https://apirepetiteur.wadounnou.com/api/parents').then(res=>{
                this.parents=res.data.data.filter(parent => parent.user.id === this.user_id)
                console.log(this.parents)
                this.parents_id= this.parents[0].id
                // console.log(this.parents_id)
                // console.log(res)
            });
            this.getEnfants();
        },
       
        getEnfants(){
            //console.log(this.parents_id);
            axios.get('https://apirepetiteur.wadounnou.com/api/enfants').then(res=>{
                this.enfants=res.data.data.filter(result =>
                // result.status ==='Terminer' &&
                    result.parents.id === this.parents_id
                       
                    );
                // console.log(this.enfants)
                // console.log(res)
            });
        },
        getTarification(){
            const token = localStorage.getItem('token');
            axios.get('https://apirepetiteur.wadounnou.com/api/tarifications').then(res=>{
                this.tarification=res.data.data
                // console.log(this.tarification)
                // console.log(res)
            });
        },
        getClasses(){
            const token = localStorage.getItem('token');
            axios.get('https://apirepetiteur.wadounnou.com/api/classes').then(res=>{
                this.classes= res.data.data;
                // console.log(this.classe)
                // console.log(res)
            });
            this.getPrix();
        },
       
        getMatiere(){
            const token = localStorage.getItem('token');
            axios.get('https://apirepetiteur.wadounnou.com/api/matieres').then(res=>{
                this.matiere= res.data.data
                // console.log(this.matiere)
                // console.log(res)
            });
            this.getPrix();
        },
        getPrix() {
    const token = localStorage.getItem('token');
    axios.get('https://apirepetiteur.wadounnou.com/api/tarifications').then(res => {
        this.prixe = res.data.data.filter(result =>
            result.matiere.id === this.matiere_id &&
            result.classe.id === this.classe_id
           
        );

        if (this.matiere_id && this.classe_id && this.prixe.length > 0) {
            this.prix = this.prixe[0].prix +' ' + 'FCFA';
            this.tarification_id = this.prixe[0].id ;
            //this.getRepetiteur();
        } else {
            this.prix = '0 FCFA';
            this.tarification_id = null; // Réinitialiser l'id de tarification si la condition n'est pas remplie
           // this.getRepetiteur();
        }

        // console.log(this.prixe);
        // console.log(this.prix);
        // console.log(res);
    });

   // this.getRepetiteur();
},

getRepetiteurs(){
    axios.get('https://apirepetiteur.wadounnou.com/api/repetiteurs').then(res=>{
                this.repetit = res.data.data.filter(result =>
                   result.traitementDossiers === 'Validé'

                    );
                   // console.log(res.data.data);
                   // console.log(this.model.matiere_id);
                //console.log(this.repetit)
                //console.log(res)
            });

},
getAdmin(){
    axios.get('https://apirepetiteur.wadounnou.com/api/users').then(res=>{
                this.admin = res.data.data.filter(result =>
                   result.name === 'Supper Admin'

                    );
                    this.admin_id=this.admin[0].id
                    //console.log(res.data.data);
                   // console.log(this.model.matiere_id);
                // console.log(this.admin)
                // console.log(this.admin_id)
                // console.log(res)
            });
},
        // getPrix(){
        //     const token = localStorage.getItem('token');
        //     axios.get('http://127.0.0.1:8000/api/tarifications').then(res=>{
        //         this.prixe= res.data.data.filter(result => 
        //            result.matiere.id === this.matiere_id &&
        //            result.classe.id === this.classe_id,
                     
        //             );
        //             if(this.matiere_id ||this.classe_id){
        //                 this.prix=this.prixe[0].prix 
        //             this.tarification_id=this.prixe[0].id 
        //             }else{
        //                 this.prix='0'
        //             }
                   

        //         console.log(this.prixe)
        //         console.log(this.prix)
        //         console.log(res)
        //     });
        //     this.getRepetiteur();
        // },
        getRepetiteur(productId){
            // console.log(this.matiere_id);
            // console.log(this.classe_id);
            // console.log(this.matricule);
            
            axios.get('https://apirepetiteur.wadounnou.com/api/repetiteurmcs').then(res=>{
                console.log(res.data.data);
                // this.repetiteurs = res.data.data.filter(result =>
                // result.matiere.id === this.matiere_id &&
                //    result.classe.id === this.classe_id &&
                //    result.repetiteur && result.repetiteur.traitementDossiers === 'Validé' &&
                //    result.repetiteur && result.repetiteur.matricule == this.matricule
                    
                //     );
                console.log(productId);
                    this.repetiteurs= res.data.data.filter(repetiteur => repetiteur.repetiteur.id === productId)
                    console.log(this.repetiteurs);
                    console.log(res.data.data);
                    if (this.repetiteurs.length >0) {
                        this.repetiteur_id= this.repetiteurs[0].repetiteur.id
                        this.matricule=this.repetiteurs[0].repetiteur.matricule
                        this.matiere_id=this.repetiteurs[0].matiere.id
                        this.classe_id=this.repetiteurs[0].classe.id
                    }
                    console.log( this.repetiteur_id);
                    
                   // console.log(res.data.data);
                   // console.log(res.data.data);
                   // console.log(this.model.matiere_id);
               // console.log(this.repetiteurs)
               // console.log(res)
            });
           
        },
        saveDemande(){
            const token = localStorage.getItem("token");
  const dataToSend = {
    fname: this.fname,
    lname: this.lname,
    phone: this.phone,
    sexe: this.sexe,
    adresse: this.adresse,
    parents_id: this.parents_id,
  };

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  console.log(config);
  console.log(dataToSend);
            
  axios.post("https://apirepetiteur.wadounnou.com/api/enfants", dataToSend, config)
    .then((response) => {
      if (response.status === 201) {
        const enfantId = response.data.data.id;
        //this.errorList = "Votre enfant a été ajouté avec succès";
       // console.log(enfantId);
        //console.log(response.data.data);
       // alert("Votre enfant a été ajouté avec succès");

        const dataToSends = {
          description: this.adresses,
          tarification_id: this.tarification_id,
          repetiteur_id: this.repetiteur_id,
          enfants_id: enfantId,
        };

        axios.post('https://apirepetiteur.wadounnou.com/api/demandes', dataToSends, config)
          .then(res => {
            if (res.status === 201) {
              const demandeId = res.data.data.id;
              localStorage.setItem('demande_id', demandeId);

              const dataToSen = {
                type: "demande",
                demande_id: demandeId,
                user_id: this.admin_id,
                message: "Nouvelle demande",
              };

              axios.post('https://apirepetiteur.wadounnou.com/api/notifications', dataToSen, config)
                .then(response => {
                  if (response.status === 201) {
                    this.errorList = "Demande effectuée avec succès";
                    //alert('Demande effectuée avec succès');
                    Swal.fire({
                    title: 'Demande effectuée avec succès',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                    this.$router.push('/admin/demande');
                  }
                })
                .catch(error => {
                  if (error.response) {
                    console.log('Error response:', error.response.status, error.response.data);
                    if (error.response.status === 422) {
                      this.errorList = error.response.data.errors;
                    }
                  } else if (error.request) {
                    console.log('Error request:', error.request);
                  } else {
                    console.log('Error message:', error.message);
                  }
                });
            }
          })
          .catch(function(error) {
            if (error.response) {
              console.log('Error response:', error.response.status, error.response.data);
              if (error.response.status === 422) {
                Swal.fire({
                    title: "Quelque choses s'est mal passé ",
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                this.errorList = error.response.data.errors;
              }
            } else if (error.request) {
              console.log('Error request:', error.request);
            } else {
              console.log('Error message:', error.message);
            }
          });
      }
    })
    .catch((error) => {
      if (error.response) {
        this.errorList = "Une erreur s'est produite";
      } else {
        console.log('Error message:', error.message);
      }
    });








//             var mythis= this;


//             const dataToSend = {


//  description:this.adresse,
// tarification_id:this.tarification_id,
// repetiteur_id:this.repetiteur_id,
// enfants_id:this.enfants_id,

// };

// const dataToSen = {


// type:'demande',
// demande_id:this.demande_id,
// user_id:this.admin_id,
// message:'Nouvelle demande',


// };
// const token = localStorage.getItem('token');
           
//           // console.log(token);
//            const config={
//                headers: {
//        'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
//      }
//            };
           //console.log(config);
//console.log(dataToSend);

//             axios.post( 'https://apirepetiteur.wadounnou.com/api/demandes',dataToSend,config ).then(res =>{

//                // console.log(res.data)
//                // alert(res.data.message);
//                if (res.status==201) {
//                 localStorage.setItem('demande_id',res.data.data.id)
//                 this.demande_id=res.data.data.id


//                 const dataToSen = {
//   type: "demande",
//   demande_id: this.demande_id,
//   user_id: this.admin_id,
//   message: "Nouvelle demande",
// };

//console.log(dataToSen);

// axios.post('https://apirepetiteur.wadounnou.com/api/notifications', dataToSen, config)
//   .then(response => {
//    // console.log(response.data);
//     if (response.status === 201) {
//       this.errorList = "Demande effectuée avec succès";
//       alert('Demande effectuée avec succès');
//       this.$router.push('/admin/demande');
//     }F
//   })
//   .catch(error => {
//   if (error.response) {
//     console.log('Error response:', error.response.status, error.response.data);
//     if (error.response.status === 422) {
//       this.errorList = error.response.data.errors;
//     }
//   } else if (error.request) {
//     console.log('Error request:', error.request);
//   } else {
//     console.log('Error message:', error.message);
//   }
// });


//                 const dataToSen = {


// type:"demande",
// demande_id:this.demande_id,
// user_id:this.admin_id,
// message:"Nouvelle demande",


// };
//                 console.log(dataToSen);

//                 axios.post('http://127.0.0.1:8000/api/notifications',dataToSen,config).then(response=>{
//                     console.log(response.data)
//                     if(response.status==201){
//                         mythis.errorList="Demande effectuée avec succès"
//                     alert('Demande effectuée avec succès')
//                     this.$router.push('/admin/demande')
//                     }
//                 }) .catch(function(error)
//            {
             
//                 if (error.reponse) {
//                     if (error.response.status==422) {
//                         mythis.errorList=error.response.data.errors;
//                         console.log(error.response.data.errors);
//                     }

//             } else if (error.request){
//                 console.log(error.request);
//             }else{
//                 console.log('Error'.error.message); 
//             }
//            }
    //        )

                    //  mythis.errorList="Demande effectuée avec succès"
                    //  alert('Demande effectuée avec succès')
                    //  this.$router.push('/admin/demande')
                }
        //         else{
        //             mythis.errorList="Une erreur s'est produite"
                   

        //         }
             

        //     })
        //     .catch(function(error)
        //    {
             
        //         if (error.reponse) {
        //             if (error.response.status==422) {
        //                 mythis.errorList=error.response.data.errors;
        //                 console.log(error.response.data.errors);
        //             }

        //     } else if (error.request){
        //         console.log(error.request);
        //     }else{
        //         console.log('Error'.error.message); 
        //     }
        //    }
        //     )
        // }
    },
}

</script>