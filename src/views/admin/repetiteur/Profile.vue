
<template>
  <div v-if="loading" class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    <p class="text-gray-900 ml-3">Chargement en cours...</p>
  </div>
    <div 
    
    v-for="(repetiteur, index) in repetiteurs"
            :key="index"
    class="container w-full" enctype="multipart/form-data">
        <h3 class="text-3xl font-medium text-gray-900  text-center mt-4 mb-4 font-serif text-start">{{ repetiteur.user.name }}</h3>
        <div class="flex justify-end">
          <div class="relative h-8 w-8 mt-2">
            <div class="absolute left-0 top-0  bg-red-500 rounded-full">
               <span class="text-sm text-white p-1">{{ Numbere }}</span>
            </div>
            <div class="p-2">
                  <button  @click="updateNotifications"> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="text-gray-600 w-6 h-6"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                    />
                  </svg></button>
            </div>
          </div>
          
        </div>
        <div class="w-full max px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-12 md:p-6 ">
           <div>
            
            <form class="" action="#" method="post"  @submit.prevent="updateRepetiteur(repetiteur.id)" enctype="multipart/form-data">
               
            <div class="flex justify-center mb-2" > <img :src="repetiteur.profil_imageUrl ? repetiteur.profil_imageUrl : Teamwork" alt="" 
              class="lg:h-48 rounded-lg object-cover  "></div>
              <table class=" table-responsive w-full text-sm text-left rtl:text-right text-gray-500">
                <thead class="text-xl text-gray-700 uppercase bg-gray-100">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center " colspan="2">
                          
                        </th>
                        
                    </tr>
                </thead>
                <tbody>
                  <tr class="bg-white text-lg border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Situation Familiale
                    </th>
                    <td class="px-6 py-4">
                      {{ repetiteur.situationMatrimoniale }}
                    </td>
          
                  
                    
                </tr>
                   
                    <tr class="bg-white text-lg border-b ">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Commune
                      </th>
                      <td class="px-6 py-4">
                        {{ repetiteur.commune.name}}
                      </td>
                      
                  </tr>
                  <tr class="bg-white text-lg border-b ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                        Détail adresse
                    </th>
                    <td class="px-6 py-4">
                      {{ repetiteur.adresse}}
                    </td>
                    
                </tr>
                <tr class="bg-white text-lg border-b ">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      Nombre d'enfants encadres
                  </th>
                  <td class="px-6 py-4">
                    {{ nombre }}
                  </td>
                  
              </tr>
               
            </tbody>
            </table>
 
        
        <!-- <div class="grid gap-6 mb-6 md:grid-cols-4"> -->
    
            <!-- <div class="flex-1">
                <label for="classe" class="block mb-2 text-lg font-medium text-gray-900 ">Classe</label>
                <input type="text" name="classe" v-model="model.classe" id="classe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="La où les classe(s) que vous enseignez" required>
            </div> -->
            <!-- <div class="flex-1">
              <label for="phone" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Téléphone</label>
              <input type="number"  v-model="repetiteur.phone" name="phone" id="phone" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="Entrer votre numéro de téléphone" required>
          </div>
          <div class="flex-1">
            <label for="adresse" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Commune</label>
            <input type="text" name="adresse"  v-model="repetiteur.commune.name" id="adresse" class="bg-green-100  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="Entrer votre adresse" required>
        </div>
        <div class="flex-1">
          <label for="adresse" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Détails Adresse</label>
          <input type="text" name="adresse"  v-model="repetiteur.adresse" id="adresse" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="Entrer votre adresse" required>
      </div> -->
      <!-- <div class="flex-1">
        <label for="adresse" class="block mb-2 text-2xl font-medium text-gray-900 ">Matricule</label>
        <input type="text" name="adresse"  v-model="repetiteur.matricule" id="adresse" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="Entrer votre adresse" required>
    </div> -->
     <!-- <div class="flex-1">
                  <label for="ecole" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Ecole</label>
                  <input type="text" name="ecole"  v-model="repetiteur.ecole" id="ecole" class="bg-green-100  border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="Entrer l'ecole ou vous enseignez" required>
              </div>
  
             </div> -->
  
     
              <!-- <div>
                  <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 ">Grade</label>
                
                  <select id="countries" v-model="model.grade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                     <option selected >Choisir votre sexe</option> -->
                    <!-- <option value="Permanent" required>Permanent</option>
                    <option value="Vacataire">Vacataire</option>
                    <option value="Autres">Autres</option>
                    </select> -->
              <!-- </div> --> 
            <!-- <div class="flex space-x-4"> -->
              <!-- <div class="flex-1">
                <label for="countries" class="block mb-2 text-lg font-medium text-gray-900 ">Matières</label>
                <select id="countries" v-model="model.matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option selected  >Choisir vos matières</option>
    
                <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
              
                </select>
               </div> -->
                
              
            <!-- </div> -->
           

               <!-- <div class="grid gap-6 mb-6 md:grid-cols-3">
                <div class="flex-1">
                  <label for="grade" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Grade</label>
                  <input type="text" name="grade"  v-model="repetiteur.grade" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="Entrer votre grade" required>
              </div>
             
            <div class="flex-1">
              <label for="dateLieuNaissance" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Date et lieu de naissance</label>
              <input type="text" name="dateLieuNaissance"  v-model="repetiteur.dateLieuNaissance" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-green-1000 dark:placeholder-gray-400 " placeholder=" EX: 20/10/1990/Cotonou" required>
          </div>
          <div class="flex-1">
            <label for="situationMatrimoniale" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Situation matrimoniale</label>
            <input type="text" name="situationMatrimoniale"  v-model="repetiteur.situationMatrimoniale" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-green-1000 dark:placeholder-gray-400 " placeholder="Entrer votre situation matrimoniale" required>
        </div>
               </div> -->
                <!-- <div class="grid gap-6 mb-6 md:grid-cols-3">
                  <div class="flex-1">
                    <label for="ecole" class="block text-start mb-2 text-2xl font-medium text-gray-900 ">Niveau d'etude</label>
                    <input type="text" name="ecole"  v-model="repetiteur.niveauEtude" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-green-1000 dark:placeholder-gray-400 dark:text-white" placeholder="Entrer votre niveau d'etude" required>
                </div>
               
              <div class="flex-1">
                <label for="countries" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Sexe</label>
                <select id="countries" v-model="repetiteur.sexe" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                 <option selected >Choisir votre sexe</option>
                <option value="Homme" required>Homme</option>
                <option value="Femme">Femme</option>
                </select>
    
               </div > 
               <div class="flex-1">
                <label for="experience" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Expérience</label>
                <input type="text"  v-model="repetiteur.experience" name="experience" id="experience" placeholder="Entrer votre expérience professionnel" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
            </div>
                </div> -->
                <!-- <div class="grid gap-6 mb-6 md:grid-cols-2">
                  <div class="flex-1">
                        <label for="description" class="block text-start text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Description</label>
                        <input type="text" name="description"  v-model="repetiteur.description" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" Un description de sois pour attirer les parents" required>
                    </div>


                  <div class="flex-1">
                    <label for="heureDisponibilite" class="block text-start mb-2 text-2xl font-medium text-gray-900 dark:text-white">Heure de Disponibilité</label>
                    <input type="text" name="heureDisponibilite"  v-model="repetiteur.heureDisponibilite" id="ecole" class="bg-green-100 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder=" EX: Mercredi 14h à 18 et Samedi 14h à 18h" required>
                </div>
                   </div> -->
                <!-- <div class="grid gap-6 mb-6 md:grid-cols-4 text-start">
                  <div class="flex-1">
                    <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size">Photo de profil</label>
                    <a :href="repetiteur.profil_imageUrl" target="blank" class="text-xl text-start">Télécharger</a>
      
                  </div>
                
                  <div class="flex-1">
                    <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size"> Diplôme</label>
                    <a :href="repetiteur.diplome_imageUrl" target="blank" class="text-xl text-start">Télécharger</a>
      
                  </div>

                     <div class="flex-1">
                    <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size">Casier judiciaire</label>
                    <a :href="repetiteur.profil_imageUrl" target="blank" class="text-xl text-start">Télécharger</a>
                  </div>  
                  
                <div class="flex-1">
                <label class="block text-start mb-2 text-2xl font-medium text-gray-900 " for="large_size">L'attestation de résidence</label>
                <a :href="repetiteur.attestationResidence" target="blank" class="text-xl text-start">Télécharger</a>
      
                </div>
                  
                </div> -->
               
                <!-- <div class="grid gap-6 mb-6 md:grid-cols-2 text-start">
                 
                  <div class="flex-1">
                    <label class="block text-start mb-2  text-2xl font-medium text-gray-900 " for="large_size">Pièces d'identité</label>
                    <a :href="repetiteur.identite" target="blank" class="text-xl text-start">Télécharger</a>
      
                  </div>
                 
                </div> -->
            
            
              <div class="flex justify-between mt-2">
              <button type="button" @click="openSecondModal(repetiteur.phone, repetiteur.dateLieuNaissance,repetiteur.description, repetiteur.sexe, repetiteur.ecole, repetiteur.experience ,repetiteur.adresse, repetiteur.commune.id, repetiteur.heureDisponibilite, repetiteur.grade, repetiteur.niveauEtude, repetiteur.situationMatrimoniale)" class=" text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Voir plus</button>
                  <button type="button" @click="openModal(repetiteur.phone, repetiteur.dateLieuNaissance,repetiteur.description, repetiteur.sexe, repetiteur.ecole, repetiteur.experience ,repetiteur.adresse, repetiteur.commune.id, repetiteur.heureDisponibilite, repetiteur.grade, repetiteur.niveauEtude, repetiteur.situationMatrimoniale, repetiteur.identite)" class=" text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Mettre à jour</button>
              </div>
             
    
                
            </form>
           </div>
        </div>
    </div>
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-2 rounded-md md:w-[1300px] sm:w-full max-h-[85vh] overflow-y-auto ">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <div class="relative p-1 w-full">
          <!-- Modal content -->
          
              <!-- Modal header -->
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 class="text-2xl font-semibold text-gray-900 ">
                  Modifier votre profil
                  </h3>
                  <button @click="closeModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                     
                  </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 md:p-5">
                  <form @submit.prevent="updateRepetiteur" class="space-y-4" action="#">

                    <div class="grid gap-6 mb-6 md:grid-cols-3">
                      <div class="flex-1">
                        <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Photo de profil</label>
                        <input ref="profil_imageUrl" @change="onFileChange"  class="block w-full text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="large_size" type="file">
          
                      </div>
                    
                      <div class="flex-1">
                        <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Importer votre diplome</label>
                        <input type="file"  @change="handleFileUpload" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="large_size">
          
                      </div>

                      <div class="flex-1">
                        <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Importer votre casier judiciaire</label>
                        <input  type="file"  @change="casierJudicaires" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="large_size">
                      </div>  
                        
                      
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                     
                      
                    <div class="flex-1">
                    <label class="block mb-2 text-2xl font-medium text-gray-900 " for="large_size">Importer l'attestation de résidence</label>
                    <input type="file"  @change="attestationResidences" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="large_size">
          
                    </div>
                    <div class="flex-1">
                      <label class="block mb-2  text-2xl font-medium text-gray-900 " for="large_size">Importer votre pièces d'identité</label>
                      <input type="file"  @change="identites" accept=".pdf"  class="block w-full  text-xl text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 " id="large_size" >
        
                    </div>
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-4">
    
                      <!-- <div class="flex-1">
                          <label for="classe" class="block mb-2 text-lg font-medium text-gray-900 ">Classe</label>
                          <input type="text" name="classe" v-model="model.classe" id="classe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="La où les classe(s) que vous enseignez" required>
                      </div> -->
                      <div class="flex-1">
                        <label for="phone" class="block mb-2 text-2xl font-medium text-gray-900 ">Téléphone</label>
                        <input type="number"  v-model="phone" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="">
                    </div>
                    <div class="flex-1">
                      <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 ">Commune</label>
                      <select id="countries" v-model="commune" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required>
                       <option value="" >Selectionner votre Commune</option>
                       <option v-for="fruit in communes" :key="fruit.id" :value="fruit.id">{{ fruit.name }}</option>
                      </select>
              
                     </div > 
                  <div class="flex-1">
                    <label for="adresse" class="block mb-2 text-2xl font-medium text-gray-900 ">Détails Adresse</label>
                    <input type="text" name="adresse"  v-model="adresse" id="adresse" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" >
                </div>
                <div class="flex-1">
                  <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 ">Ecole</label>
                  <input type="text" name="ecole"  v-model="ecole" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="">
              </div>
               
            
                       </div>
            
               
                        <!-- <div>
                            <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 ">Grade</label>
                          
                            <select id="countries" v-model="model.grade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                               <option selected >Choisir votre sexe</option> -->
                              <!-- <option value="Permanent" required>Permanent</option>
                              <option value="Vacataire">Vacataire</option>
                              <option value="Autres">Autres</option>
                              </select> -->
                        <!-- </div> --> 
                      <!-- <div class="flex space-x-4"> -->
                        <!-- <div class="flex-1">
                          <label for="countries" class="block mb-2 text-lg font-medium text-gray-900 ">Matières</label>
                          <select id="countries" v-model="model.matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected  >Choisir vos matières</option>
              
                          <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
                        
                          </select>
                         </div> -->
                          
                        
                      <!-- </div> -->
                     
                         <div class="grid gap-6 mb-6 md:grid-cols-4">
                          <div class="flex-1">
                            <label for="grade" class="block mb-2 text-2xl font-medium text-gray-900 ">Grade</label>
                            <input type="text" name="grade"  v-model="grade" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="">
                        </div>
                        <div class="flex-1">
                          <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 ">Sexe</label>
                          <select id="countries" v-model="sexe" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
                           <option selected >Choisir votre sexe</option>
                          <option value="Homme" required>Homme</option>
                          <option value="Femme">Femme</option>
                          </select>
              
                         </div >
                         <div class="flex-1">
                          <label for="heureDisponibilite" class="block mb-2 text-2xl font-medium text-gray-900 ">Heure de Disponibilité</label>
                          <input type="text" name="heureDisponibilite"  v-model="heureDisponibilite" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="">
                      </div> 
                       
                      <div class="flex-1">
                        <label for="dateLieuNaissance" class="block mb-2 text-2xl font-medium text-gray-900 ">Date et lieu de naissance</label>
                        <input type="text" name="dateLieuNaissance"  v-model="dateLieuNaissance" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" >
                    </div>
                   
                         </div>
                          <div class="grid gap-6 mb-6 md:grid-cols-4">
                            <div class="flex-1">
                              <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 ">Niveau d'etude</label>
                              <input type="text" name="ecole"  v-model="niveauEtude" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" >
                          </div>
                         
                       
                         <div class="flex-1">
                          <label for="experience" class="block mb-2 text-2xl font-medium text-gray-900 ">Expérience</label>
                          <input type="text"  v-model="experience" name="experience" id="experience" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
                      </div>
                      <div class="flex-1">
                        <label for="description" class="block mb-2 text-2xl font-medium text-gray-900 ">Description</label>
                        <input type="text" name="description"  v-model="description" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" >
                    </div>
                    <div class="flex-1">
                      <label for="situationMatrimoniale" class="block mb-2 text-2xl font-medium text-gray-900 ">Situation matrimoniale</label>
                      <input type="text" name="situationMatrimoniale"  v-model="situationMatrimoniale" id="ecole" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" >
                  </div>
                          </div>

                    <div class="flex justify-end">
                      <button type="submit"  class=" text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">Envoyer</button>
                    </div>

                  </form>
              </div>

      </div>
      </div>
    </div>
    
          <div
            v-if="isModalSecondOpen"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <div class="bg-white p-8 rounded-md md:w-[1300px] sm:w-full max-h-[85vh] overflow-y-auto">
              <button
                @click="closeSecondModal"
                class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
               <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 class="text-2xl font-semibold text-gray-900 ">
                  Voir  votre profil
                  </h3>
                  <button @click="closeSecondModal"  type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                      </svg>
                     
                  </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 md:p-5"  v-for="(repetiteur, index) in repetiteurs" :key="index">
                  <form @submit.prevent="updat" class="space-y-4" action="#">

                    <div class="grid gap-6 mb-6 md:grid-cols-4">
    
                      <!-- <div class="flex-1">
                          <label for="classe" class="block mb-2 text-lg font-medium text-gray-900 ">Classe</label>
                          <input type="text" name="classe" v-model="model.classe" id="classe" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " placeholder="La où les classe(s) que vous enseignez" required>
                      </div> -->
                      <div class="flex-1">
                        <label for="phone" class="block mb-2 text-2xl font-medium text-gray-900 ">Téléphone</label>
                        <h4 class="text-xl">{{ repetiteur.phone }}</h4>
                       
                    </div>
                    <div class="flex-1">
                      <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 ">Commune</label>
                       <h4 class="text-xl">{{ repetiteur.commune.name }}</h4>
                     
              
                     </div > 
                  <div class="flex-1">
                    <label for="adresse" class="block mb-2 text-2xl font-medium text-gray-900 ">Détails Adresse</label>
                     <h4 class="text-xl">{{ repetiteur.adresse }}</h4>
                   
                </div>
                <div class="flex-1">
                  <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 ">Ecole</label>
                  <h4 class="text-xl">{{ repetiteur.ecole }}</h4>
                 
              </div>
               
            
                       </div>
            
               
                        <!-- <div>
                            <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 ">Grade</label>
                          
                            <select id="countries" v-model="model.grade" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                               <option selected >Choisir votre sexe</option> -->
                              <!-- <option value="Permanent" required>Permanent</option>
                              <option value="Vacataire">Vacataire</option>
                              <option value="Autres">Autres</option>
                              </select> -->
                        <!-- </div> --> 
                      <!-- <div class="flex space-x-4"> -->
                        <!-- <div class="flex-1">
                          <label for="countries" class="block mb-2 text-lg font-medium text-gray-900 ">Matières</label>
                          <select id="countries" v-model="model.matiere_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                          <option selected  >Choisir vos matières</option>
              
                          <option v-for="(matier,index) in this.matiere" :key="index" :value="matier.id" >{{ matier.name }}</option>
                        
                          </select>
                         </div> -->
                          
                        
                      <!-- </div> -->
                     
                         <div class="grid gap-6 mb-6 md:grid-cols-3">
                          <div class="flex-1">
                            <label for="grade" class="block mb-2 text-2xl font-medium text-gray-900 ">Grade</label>
                            <h4 class="text-xl">{{ repetiteur.grade }}</h4>
                           
                        </div>
                        <div class="flex-1">
                          <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900 ">Sexe</label>
                          <h4 class="text-xl">{{ repetiteur.sexe }}</h4>
                         
              
                         </div >
                         
                       
                      <div class="flex-1">
                        <label for="dateLieuNaissance" class="block mb-2 text-2xl font-medium text-gray-900 ">Date et lieu de naissance</label>
                        <h4 class="text-xl">{{ repetiteur.dateLieuNaissance }}</h4>
                       
                    </div>
                   
                         </div>
                          <div class="grid gap-6 mb-6 md:grid-cols-3">
                            <div class="flex-1">
                              <label for="ecole" class="block mb-2 text-2xl font-medium text-gray-900 ">Niveau d'etude</label>
                              <h4 class="text-xl">{{ repetiteur.niveauEtude }}</h4>
                             
                          </div>
                         
                       
                         <div class="flex-1">
                          <label for="experience" class="block mb-2 text-2xl font-medium text-gray-900 ">Expérience</label>
                          <h4 class="text-xl">{{ repetiteur.experience }}</h4>
                        
                      </div>
                     
                    <div class="flex-1">
                      <label for="situationMatrimoniale" class="block mb-2 text-2xl font-medium text-gray-900 ">Situation matrimoniale</label>
                      <h4 class="text-xl">{{ repetiteur.situationMatrimoniale }}</h4>
                     
                  </div>
                          </div>

                           <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div class="flex-1">
                        <label for="description" class="block mb-2 text-2xl font-medium text-gray-900 ">Description</label>
                         <h4 class="text-xl">{{ repetiteur.description }}</h4>
                        
                    </div>
                            <div class="flex-1">
                          <label for="heureDisponibilite" class="block mb-2 text-2xl font-medium text-gray-900 ">Heure de Disponibilité</label>
                           <h4 class="text-xl">{{ repetiteur.heureDisponibilite }}</h4>
                         
                      </div>
                           
                           </div>

                    

                  </form>
              </div>

      
            </div>
          </div>
    
    <br><br><br>

    </template>
    <script>

     import axios from 'axios'
     import Teamwork from '/src/assets/images/vectoriel.jpg';
    export default {
        name:'profile',
        setup: () => {
    return { Teamwork };
  },
        data(){
            return{

              
              defautPhotoUrl:"@/../../../../../src/assets/images/vectoriel.jpg",
            isModalSecondOpen: false,
              nombre:0,
              loading: true,
                matiere:[],
                enfants:[],
                communes:[],
                repetiteurs:[],
                errorList:'',
                repetiteurs_id:'',
                selectedFile: null,
                isModalOpen: false,
                diplome_imageUrl:'',
                profil_imageUrl:'',
                identite:'',
                casierJudicaire:'',
                attestationResidence:'',
                
                  phone:'',
                adresse:'',
                commune:'',
                description:'',
                dateLieuNaissance:'',
                situationMatrimoniale:'',
                niveauEtude:'',
                heureDisponibilite:'',
                sexe:'',
                grade:'',
                ecole:'',
                experience:'',
                
                user_id:'',
                Numbere: "0",

            }
        },
        mounted(){
          //  console.log('I am here')
          this.getMatiere();
          this.getCommune();
          this.getUsers();
          this.getnotification();
          this.$nextTick(() => {
            this.getrepetiteur();
            this.getnotification()
          
          });
          
      
        },
        methods:{ 
           openSecondModal() {
      this.isModalSecondOpen = true;
    },
    closeSecondModal() {
      this.isModalSecondOpen = false;
      this.fname = "";
      this.lname = "";
      this.phone = "";
      this.sexe = "";
      this.adresse = "";
    },
          openModal(enfantId, dateLieuNaissance,
          description ,sexe,ecole,experience,
           adresse, commune, heure, grade, niveau, situation, identite) {
      this.isModalOpen = true;
      this.phone=enfantId
      this.dateLieuNaissance=dateLieuNaissance
      this.description=description
      this.sexe=sexe
      this.ecole=ecole
      this.experience=experience
      this.adresse=adresse
      this.commune=commune
      this.heureDisponibilite=heure
      this.grade=grade
      this.niveauEtude=niveau
      this.situationMatrimoniale=situation
      this.identite=identite
     
    },
    closeModal() {
      this.isModalOpen = false;
      this.phone='',
      this.dateLieuNaissance='',
      this.description='',
      this.sexe='',
      this.ecole='',
      this.experience='',
      this.adresse='',
      this.commune='',
      this.heureDisponibilite='',
      this.grade='',
      this.niveauEtude='',
      this.situationMatrimoniale='',
      this.identite=''
     
    },
   


            onFileChange(e){
                 const file = e.target.files[0];
           this.image = file;
    
           this.sendProfil();
            },
            handleFileUpload(e){
                 const file = e.target.files[0];
           this.pdf = file;
            this.sendpdf();
            },
            identites(e){
                 const file = e.target.files[0];
           this.pdfidentite = file;
        // this.sendpdfIdentite();
       // this.sendProfil();
           this.sendpdfIdentite();
            },
            casierJudicaires(e){
                 const file = e.target.files[0];
           this.pdfcasierJudicaires = file;
           this.sendpdfcasierJudicaires();
            },
            attestationResidences(e){
                 const file = e.target.files[0];
           this.pdfattestationResidence = file;
           //this.sendpdf();
           //this.sendpdfcasierJudicaires();
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
                //console.log(response);
                this.profil_imageUrl = response.data.data.media_url;
                //console.log(this.profil_imageUrl);
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
               // console.log(response);
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
          console.log(this.pdfidentite);
    
          axios
            .post("https://apirepetiteur.wadounnou.com/api/medias", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((response) => {
               // console.log(response);
              if (response.status == 201) {
                console.log(response);
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
          console.log(this.pdfcasierJudicaires);
    
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
                this.casierJudicaire = response.data.data.media_url;
                //console.log(this.casierJudicaire);
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
          console.log(this.pdfattestationResidence);
    
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
                this.attestationResidence = response.data.data.media_url;
                //console.log(this.attestationResidence);
               // this.saveStudent();
                
              }
            })
            .catch((error) => {
              console.error(error);
            });
        },
        getCommune(){
        axios.get('https://apirepetiteur.wadounnou.com/api/communes').then(res=>{
                this.communes=res.data.data
                console.log(this.commune)
               
            });

      },
            getMatiere(){
                axios.get('https://apirepetiteur.wadounnou.com/api/matieres').then(res=>{
                    this.matiere=res.data.data
                   // console.log(this.matiere)
                   // console.log(res)
                });
            },
           async getUsers (){
            
                const token = localStorage.getItem('token');
               
                console.log(token);
                const config={
                    headers: {
            'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
          }
                };
                console.log(config);
         axios.get('https://apirepetiteur.wadounnou.com/api/profile',config)
        .then(response => {
          this.user_id = response.data.id;
          localStorage.setItem('user_id',response.data.id)
          //userIds=this.userId;
          //console.log(response.data.id);
          //console.log(this.user_id);
        })
        .catch(error => {
          if (error.response === 401) {
            this.error = "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
            // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
          } else {
            this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
          }
        });
       this.getnotification() ;
    },
   async getnotification(){
    
      console.log(this.user_id);
         const notificationsResponse = await axios.get("https://apirepetiteur.wadounnou.com/api/notifications");
      
        console.log(notificationsResponse);
        console.log(this.user_id);
     this.notifications = notificationsResponse.data.data.filter((notificat) => notificat.status == "Non lu" &&
     notificat.user.id === this.user_id
     );
     this.Numbere = this.notifications.length;
     this.notif_id = this.notifications.map(notification => notification.id);
     console.log(this.user_id);
     console.log(this.notifications);
     console.log(this.Numbere);
     console.log(this.notif_id);
    },
    updateNotifications(){
      const token = localStorage.getItem("token");

      // console.log(token);
      const config = {
        headers: {
          Authorization: "Bearer " + token, // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
        },
      };
      // console.log(config);
     // console.log(this.notif_id);
      const newStatus = "Lu";  // Remplacez 'nouveauStatut' par le statut souhaité.
const apiUrl = 'https://apirepetiteur.wadounnou.com/api/notifications';  // Remplacez par l'URL correcte de votre API.

// Utilisez une boucle pour envoyer une requête pour chaque ID.
this.notif_id.forEach(id => {
  // Créez un objet contenant les données à mettre à jour.
  const dataToUpdate = {
    status:"Lu",
    
  };
//console.log(`Updating ID ${id} to status: ${dataToUpdate.status}`);

  // Utilisez Axios pour envoyer la requête PUT à l'API pour chaque ID.
  axios.put(`${apiUrl}/${id}`, dataToUpdate,config)
    .then(response => {
      // Gérez la réponse de l'API si nécessaire.
      //console.log(`Mise à jour réussie pour l'ID ${id} :`, response.data);

      this.$router.push('/admin/reponse');
    })
    .catch(error => {
      // Gérez les erreurs de la requête.
      console.error(`Erreur lors de la mise à jour pour l'ID ${id} :`, error);
    });
});

    },
           async getrepetiteur(){
            setTimeout(() => {
        this.loading = false; // Set loading to false when data is fetched
      }, 5000);
               
            const token = localStorage.getItem('token');
                const config = {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      };

     // console.log(config);

      // Requête pour récupérer le profil
      const profileResponse  = await axios.get('https://apirepetiteur.wadounnou.com/api/profile', config);
        console.log(profileResponse);
      // Stocker les données du profil dans le composant ou Vuex
      this.role_id = profileResponse.data.role_id;
      this.user_id = profileResponse.data.id;
      //console.log(this.role_id);
      //console.log(this.user_id);

    axios.get('https://apirepetiteur.wadounnou.com/api/repetiteurs').then(res=>{
                this.repetiteurs = res.data.data.filter(repetiteur => repetiteur.user.id === this.user_id)
                  
                //console.log(this.repetiteurs)
                this.repetiteurs_id= this.repetiteurs[0].id
                //console.log(this.repetiteurs_id);

            });

           
            console.log(this.repetiteurs_id);
            axios.get('https://apirepetiteur.wadounnou.com/api/demandes').then(res=>{
              console.log('Données de la requête:', res.data);
                this.enfants=res.data.data.filter(enfant => enfant.repetiteur.id === this.repetiteurs_id && enfant.status==='Validé'
                
                );
                console.log('Enfants filtrés:', this.enfants);
               this.nombre=this.enfants.length
               console.log('Nombre total:', this.nombre);
            });
            console.log( this.enfants.length);
            console.log( this.nombre);
            console.log(  this.enfants);
       
           
          
        },

    
            updateRepetiteur(){
                var mythis= this;
                const token = localStorage.getItem('token');
                const user_id= this.user_id
                console.log(user_id);
                console.log(this.repetiteurs_id);
                const dataToSend = {
    
                    phone:this.phone,
                    adresse:this.adresse,
                    // classe:this.model.classe,
                    diplome_imageUrl:this.diplome_imageUrl,
                    identite:this.identite,
                    casierJudiciaire:this.casierJudicaire,
                    attestationResidence:this.attestationResidence,
                    profil_imageUrl:this.profil_imageUrl,
                    sexe:this.sexe,
                    grade:this.grade,
                    ecole:this.ecole,
                    heureDisponibilite:this.heureDisponibilite,
                    description:this.description,
                    dateLieuNaissance:this.dateLieuNaissance,
                    situationMatrimoniale:this.situationMatrimoniale,
                    niveauEtude:this.niveauEtude,
                    experience:this.experience,
                    // matiere_id:this.model.matiere_id,
                    user_id:user_id,
                    };
    const config={
                    headers: {
            'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
          }
                };
    console.log(dataToSend);
    console.log(this.repetiteurs_id);
                axios.put('https://apirepetiteur.wadounnou.com/api/repetiteurs/'+ this.repetiteurs_id, dataToSend,config )
    .then(response => {
      // Gérer la réponse de la requête POST
      console.log(response)
      console.log(response.data)
    
                   
                    mythis.errorList=response.data.message
                 //   alert(response.data.message);
                    if (response.status===200) {
                        mythis.errorList="Compte répétiteurs mise à jour avec succès"
                        //alert('Compte répétiteurs mise à jour avec succès')
                        Swal.fire({
                    title:"Compte répétiteurs mise à jour avec succès",
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                        this.$router.push('/admin/dashboard');
                    }
                    else{
                      mythis.errorList="une erreur s'est produite vueillez réessayer plus tard"
                    }

    })
    .catch(error => {
      if (error.response) {
                console.log(error.response.data.message); 
                console.log(error.response); 
                Swal.fire({
                    title:"Quelques chose s'est mal passé veuillez réessayer plus tard",
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
                this.errorList = "une erreur s'est produite veuiller réessayer ";
    
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
    
    
    