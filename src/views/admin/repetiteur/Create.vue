
<template>
    
<div class="container w-full mx-auto my-auto" enctype="multipart/form-data">
  <h3 class="text-3xl font-medium text-gray-900 dark:text-white text-center mt-4 mb-8 font-serif">Formulaire d'inscription pour un Répétiteur</h3>
    <div class="w-full max px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-12 md:p-12 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" action="Post"  @submit.prevent="saveRepetiteur" enctype="multipart/form-data">
            <ul class="bg-blue-100 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
                <li class="mb-0 ms-3" >
                {{ this.errorList }}

                </li>
            </ul>
            

           <div class="grid gap-6 mb-6 md:grid-cols-4">

          <!-- <div class="flex-1">
              <label for="classe" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Classe</label>
              <input type="text" name="classe" v-model="model.classe" id="classe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="La où les classe(s) que vous enseignez" required>
          </div> -->
          <div class="flex-1">
            <label for="phone" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Téléphone</label>
            <input type="number"  v-model="model.phone" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre numéro" required>
        </div>
        <div class="flex-1">
          <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Commune</label>
          <select id="countries" v-model="model.commune" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
           <option value="" >Selectionner votre Commune</option>
           <option v-for="fruit in commune" :key="fruit.id" :value="fruit.id">{{ fruit.name }}</option>
          </select>
  
         </div > 
        <div class="flex-1">
          <label for="adresse" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Détails Adresse</label>
          <input type="text" name="adresse"  v-model="model.adresse" id="adresse" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required>
      </div>
      <div class="flex-1">
        <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Cycle</label>
        <select id="countries" v-model="model.cycle" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
         <option value="" >Selectionner votre cycle</option>
        <option value="Primaires" required>Primaires</option>
        <option value="Secondaires">Secondaires</option>
        <option value="Universitaires">Universitaires</option>
        </select>

       </div > 

           </div>

   
            <!-- <div>
                <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade</label>
              
                <select id="countries" v-model="model.grade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                   <option selected >Choisir votre sexe</option> -->
                  <!-- <option value="Permanent" required>Permanent</option>
                  <option value="Vacataire">Vacataire</option>
                  <option value="Autres">Autres</option>
                  </select> -->
            <!-- </div> --> 
          <!-- <div class="flex space-x-4"> -->
            <!-- <div class="flex-1">
              <label for="countries" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Matières</label>
              <select id="countries" v-model="model.matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              <option selected  >Choisir vos matières</option>
  
              <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
            
              </select>
             </div> -->
              
            
          <!-- </div> -->
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div class="flex-1">
              <label class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white" for="large_size">Photo de profil</label>
              <input ref="profil_imageUrl" @change="onFileChange"  class="block w-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" type="file">

            </div>
          
            <div class="flex-1">
              <label class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white" for="large_size">Importer votre diplome en format pdf</label>
              <input type="file"  @change="handleFileUpload" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" >

            </div>
              
            
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div class="flex-1">
              <label class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white" for="large_size">Importer votre casier judiciaire en format pdf</label>
              <input type="file"  @change="casierJudicaires" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" >
            </div>  
            
          <div class="flex-1">
          <label class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white" for="large_size">Importer l'attestation de résidence en format pdf</label>
          <input type="file"  @change="attestationResidences" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" >

          </div>
          </div>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
           
            <div class="flex-1">
              <label class="block mb-2  text-2xl font-medium text-gray-900 dark:text-white" for="large_size">Importer votre pièces d'identité en format pdf</label>
              <input type="file"  @change="identites" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="large_size" >

            </div>
            <div class="flex-1">
              <label for="description" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Description</label>
              <input type="text" name="description"  v-model="model.description" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" Un description de sois pour attirer les parents" required>
          </div>
          </div>
          
          <div class="grid gap-6 mb-6 md:grid-cols-2">
           
         
            <div class="flex-1">
                <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Ecole</label>
                <input type="text" name="ecole"  v-model="model.ecole" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer l'ecole ou vous enseignez" required>
            </div>
            <div class="flex-1">
              <label for="heureDisponibilite" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Heure de Disponibilité</label>
              <input type="text" name="heureDisponibilite"  v-model="model.heureDisponibilite" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" EX: Mercredi 14h à 18 et Samedi 14h à 18h" required>
          </div>
             </div>
             <div class="grid gap-6 mb-6 md:grid-cols-3">
              <div class="flex-1">
                <label for="grade" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Grade</label>
                <input type="text" name="grade"  v-model="model.grade" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre grade" required>
            </div>
           
          <div class="flex-1">
            <label for="dateLieuNaissance" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Date et lieu de naissance</label>
            <input type="text" name="dateLieuNaissance"  v-model="model.dateLieuNaissance" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" EX: 20/10/1990/Cotonou" required>
        </div>
        <div class="flex-1">
          <label for="situationMatrimoniale" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Situation matrimoniale</label>
          <input type="text" name="situationMatrimoniale"  v-model="model.situationMatrimoniale" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre situation matrimoniale" required>
      </div>
             </div>
              <div class="grid gap-6 mb-6 md:grid-cols-3">
                <div class="flex-1">
                  <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Niveau d'etude</label>
                  <input type="text" name="ecole"  v-model="model.niveauEtude" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre niveau d'etude" required>
              </div>
             
            <div class="flex-1">
              <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Sexe</label>
              <select id="countries" v-model="model.sexe" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
               <option value="" >Selectionner votre sexe</option>
              <option value="Homme" required>Homme</option>
              <option value="Femme">Femme</option>
              </select>
  
             </div > 
             <div class="flex-1">
              <label for="experience" class="block mb-2 text-2xl font-medium text-gray-900 dark:text-white">Expérience</label>
              <input type="text"  v-model="model.experience" name="experience" id="experience" placeholder="Entrer votre expérience professionnel" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
          </div>
              </div>
          
           
            <div class="flex justify-end">
                <button type="submit"  class=" my-3 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Envoyer</button>
            </div>
           
            
        </form>
    </div>
</div>
<br><br><br>



</template>
<script>
 import axios from 'axios'
export default {
    name:'repetiteurCreate',
    data(){
        return{
            matiere:[],
            commune:[],
            admin:[],
            admin_id:'',
            errorList:'',
            matricule:'',
            longueur:0,
            selectedFile: null,
            diplome_imageUrl:'',
            profil_imageUrl:'',
            repetiteur_id:'',
            identite:'',
            casierJudicaire:'',
            attestationResidence:'',
            model:{
                
                    fname:'',
                    lname:'',
                    phone:'',
                    adresse:'',
                    classe:'',
                    commune:'',
                    description:'',
                    dateLieuNaissance:'',
                    situationMatrimoniale:'',
                    niveauEtude:'',
                    heureDisponibilite:'',
                    sexe:'',
                    cycle:'',
                    grade:'',
                    ecole:'',
                    experience:'',
                    matiere_id:'',
                    user_id:'',
                
            }
        }
    },
    mounted(){
      //  console.log('I am here')
      this.getMatiere();
      this.getAdmin();
      this.getCommune();
      this.getUsers();
    // this.onFileChange();
    },
    methods:{
      getCommune(){
        axios.get('https://apirepetiteur.wadounnou.com/api/communes').then(res=>{
                this.commune=res.data.data
                console.log(this.commune)
               
            });

      },
      getAdmin(){
    axios.get('https://apirepetiteur.wadounnou.com/api/users').then(res=>{
                this.admin = res.data.data.filter(result =>
                   result.name === 'Supper Admin'

                    );
                    this.admin_id=this.admin[0].id
                    console.log(res.data.data);
                   // console.log(this.model.matiere_id);
                console.log(this.admin)
                console.log(this.admin_id)
                console.log(res)
            });
},
      getMatiere(){
            axios.get('https://apirepetiteur.wadounnou.com/api/repetiteurs').then(res=>{
                this.matiere=res.data.data
                this.longueur=res.data.data.length + 1
               // console.log(this.matiere)
                console.log(this.longueur)
                this.matricule='E0000'+this.longueur;
                console.log(res)
                console.log(this.matricule)
            });
        },
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
      localStorage.setItem('user_id',response.data.id)
      //userIds=this.userId;
      //console.log(response.data.id);
    })
    .catch(error => {
      if (error.response === 401) {
        this.error = "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
        // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
      } else {
        this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
      }
    });
  
        },
        onFileChange(e){
             const file = e.target.files[0];
       this.image = file;

      // this.sendProfil();
        },
        handleFileUpload(e){
             const file = e.target.files[0];
       this.pdf = file;
      //  this.sendpdf();
        },
        identites(e){
             const file = e.target.files[0];
       this.pdfidentite = file;
    // this.sendpdfIdentite();
    this.sendProfil();
       this.sendpdfIdentite();
        },
        casierJudicaires(e){
             const file = e.target.files[0];
       this.pdfcasierJudicaires = file;
      // this.sendpdfcasierJudicaires();
        },
        attestationResidences(e){
             const file = e.target.files[0];
       this.pdfattestationResidence = file;
       this.sendpdf();
       this.sendpdfcasierJudicaires();
       this.sendpdfattestationResidence();
       
       
        },

        
        sendProfil() {
      const formData = new FormData();

      formData.append("file", this.image);

      axios
        .post("https://apirepetiteur.wadounnou.com/api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
            console.log(response);
          if (response.status == 201) {
           // console.log(response);
            this.profil_imageUrl = response.data.data.media_url;
           // console.log(this.profil_imageUrl);
           // this.sendpdf();
            
          }
        })
        .catch((error) => {
          console.error(error);
          this.errorList=" une erreur de connexion internet s'est produite lors de l'enregistrement de l'image de profil";
        });
    },
    sendpdf() {
      const formData = new FormData();

      formData.append("file", this.pdf);
      console.log(this.pdf);

      axios
        .post("https://apirepetiteur.wadounnou.com/api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
            console.log(response);
          if (response.status == 201) {
            //console.log(response);
            this.diplome_imageUrl = response.data.data.media_url;
           // console.log(this.profil_imageUrl);
           // this.sendpdfIdentite();
            
          }
        })
        .catch((error) => {
          console.error(error);
          this.errorList=" une erreur de connexion internet s'est produite lors de l'enregistrement du pdf du diplôme";
        });
    },
    sendpdfIdentite() {
      const formData = new FormData();

      formData.append("file", this.pdfidentite);
      //console.log(this.pdfidentite);

      axios
        .post("https://apirepetiteur.wadounnou.com/api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
           // console.log(response);
          if (response.status == 201) {
            //console.log(response);
            this.identite = response.data.data.media_url;
            //console.log(this.identite);
           // this.sendpdfcasierJudicaires();
            
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    sendpdfcasierJudicaires() {
      const formData = new FormData();

      formData.append("file", this.pdfcasierJudicaires);
      //console.log(this.pdfcasierJudicaires);

      axios
        .post("https://apirepetiteur.wadounnou.com/api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
            //console.log(response);
          if (response.status == 201) {
            //console.log(response);
            this.casierJudicaire = response.data.data.media_url;
           // console.log(this.casierJudicaire);
           // this.sendpdfattestationResidence();
            
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    sendpdfattestationResidence() {
      const formData = new FormData();

      formData.append("file", this.pdfattestationResidence);
      //console.log(this.pdfattestationResidence);

      axios
        .post("https://apirepetiteur.wadounnou.com/api/medias", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
            //console.log(response);
          if (response.status == 201) {
           // console.log(response);
            this.attestationResidence = response.data.data.media_url;
            //console.log(this.attestationResidence);
           // this.saveStudent();
            
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  

        saveRepetiteur()
        {
          
            var mythis= this;
            const token = localStorage.getItem('token');
            const user_id= this.user_id
           // console.log(user_id);
            //console.log(this.matricule);
            const dataToSend = {

                matricule:this.matricule,
                phone:this.model.phone,
                commune_id:this.model.commune,
                adresse:this.model.adresse,
                // classe:this.model.classe,
                diplome_imageUrl:this.diplome_imageUrl,    //"https://apibackout.s3.amazonaws.com/images/1713947852vectoriel.jpg",
                identite:this.identite,
                casierJudiciaire:this.casierJudicaire,
                attestationResidence:this.attestationResidence,
                profil_imageUrl:this.profil_imageUrl,
                sexe:this.model.sexe,
                cycle:this.model.cycle,
                grade:this.model.grade,
                ecole:this.model.ecole,
                heureDisponibilite:this.model.heureDisponibilite,
                description:this.model.description,
                dateLieuNaissance:this.model.dateLieuNaissance,
                situationMatrimoniale:this.model.situationMatrimoniale,
                niveauEtude:this.model.niveauEtude,
                experience:this.model.experience,
                // matiere_id:this.model.matiere_id,
                user_id:user_id,
                };
const config={
                headers: {
        'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
      }
            };
//console.log(dataToSend);
            axios.post('https://apirepetiteur.wadounnou.com/api/repetiteurs', dataToSend,config )
.then(response => {
  
  //console.log(response)
  //console.log(response.data)
  localStorage.setItem('repetiteur_id',response.data.data.id)
                this.repetiteur_id=response.data.data.id
                //console.log( this.repetiteur_id);
                //console.log( this.model.parentsCreate)
                mythis.errorList=response.data.message
             //   alert(response.data.message);
                if (response.status==201) {
                    mythis.errorList="Compte répétiteurs créer avec succès"
                    //alert('Formulaire du répétiteurs remplir avec succès')
                    Swal.fire({
                    title: 'Formulaire de répétiteurs remplir avec succès',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                    const userData = { 
                      repetiteur_id: this.repetiteur_id,
                      type: "repetiteur",
                      user_id: this.admin_id,
                      message: "Nouveau répétiteur",
                    };
                    try {
          const Response = axios.post('https://apirepetiteur.wadounnou.com/api/notifications', userData, config);
          //console.log('notification Response:', Response.data);
          if (Response.status === 201) {
           // alert('Votre Compte répétiteur est mi en evaluation');
          }
        } catch (Error) {
          console.error('Erreur lors de la mise en évaluationde votre compte :', Error);

        }
                    this.$router.push('/admin/dashboard');
                }else{
                  alert("une erreur s'est produite veuiller réessayer plus tard")
                }
                this.model={
                   
                    phone:'',
                    adresse:'',
                    classe:'',
                    sexe:'',
                    grade:'',
                    ecole:'',
                    experience:'',
                    matiere_id:'',
                    user_id:'',
                }
})
.catch(error => {
  if (error.response) {
            console.log(error.response.data.message); 
            this.errorList = "une erreur s'est produite veuiller réessayer plus tard ";
            Swal.fire({
                    title:"Quelques chose s'est mal passé veuillez réessayer plus tard",
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });

        } else if (error.request) {
            console.log(error.request);
        } else {
            console.error('Une erreur inattendue s\'est produite:', error);
        }
});


        },
        async sendRepas() {
      try {
        this.addform.user_id = this.user;
        const response = await axios.post("/api/repas", this.addform );
        if (response.status ==201) {
          console.log(response);
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error.data);
      }
    },



          
            
        }
    }


</script>


