
<template>
    <div class="">
        <br>
        <div class="container w-full mx-auto my-auto " >
            <h3 class="text-3xl font-medium text-gray-900 text-center mt-2 mb-4 font-serif text-start">Veuillez nous laisser un message</h3>
            <div class="w-full max px-4 bg-neutral border border-gray-200 rounded-lg shadow sm:p-6 md:p-6 ">
                
                <form class="space-y-6" action="POST" @submit.prevent="saveDemande" enctype="multipart/form-data">
                    <ul class="bg-green-300 border-t border-border-blue-500 text-blue-700 px-4 py-3" role="alert" v-if="Object.keys(this.errorList).length > 0">
                        <li class="mb-0 ms-3" >
                        {{ this.errorList }}
                    
                       
                        </li>
                    </ul>
                  
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div class="flex-1">
                            <label for="phone" class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900 ">Votre nom Complet<span class="text-red-500">*</span></label>
                                <input type="text"  v-model="name" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required>
                            </div>

                            <div class="flex-1">
                                <label for="phone" class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900 ">Votre Téléphone<span class="text-red-500">*</span></label>
                                    <input type="text"  v-model="phone" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required>
                                </div>
    
                    </div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        

                            <div class="flex-1">
                                <label for="phone" class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900 ">Votre email<span class="text-red-500">*</span></label>
                                    <input type="email"  v-model="email" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required>
                                </div>
                                <div class="flex-1">
                                    <label for="phone" class="block text-start mb-2 px-3 text-2xl font-medium text-gray-900 ">Objet</label>
                                        <input type="text"  v-model="objet" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="" >
                                    </div>
    
                    </div>
                    <div class="flex space-x-4">
                        <div class="flex-1">
                            <label for="message" class="block text-start mb-1 text-2xl font-medium text-gray-900 ">Message<span class="text-red-500">*</span></label>

                            
                            <textarea id="message" v-model="message" rows="4" class="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="" required></textarea>

                        </div>
                       
                    
                        
    
                    </div>
                   

                    <div class="flex justify-end">
                        <button type="submit" class=" my-1 text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center">Envoyer</button>
                    </div>


                </form>
            </div>
        </div>
        <br>
       
    
    </div>
   
</template>
<script>
 import axios from 'axios'
export default {
    name:'message',
    data(){
        return{
            admin:[],
            admin_id:'',
           
            errorList:'',
            user_id:'',

            matiere:[],
            messagees:[],
            prixe:[],
            matiere_id:'',
            repetiteur_id:'',
            name:'',
            phone:'',
            email:'',
            objet:'',
            message:'',
            message_id:'',
          
        }
    },
    mounted(){
        this.getUsers();
        this.getAdmin();
        
        this.$nextTick(() => {
            this.getMessage();
    });
    },
    methods:{
        getUsers (){
            const token = localStorage.getItem('token');
           
            //console.log(token);
            const config={
                headers: {
        'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
      }
            };
           // console.log(config);
     axios.get('https://apirepetiteur.wadounnou.com/api/profile',config)
    .then(response => {
      this.user_id = response.data.id;
      this.name=response.data.name
      this.phone=response.data.phone
      this.email=response.data.email
     // console.log(response.data.id);
      //console.log( this.user_id);
    })
    .catch(error => {
      if (error.response === 401) {
        this.error = "Erreur d'authentification : Votre session a expiré. Veuillez vous reconnecter.";
        // Vous pouvez également rediriger l'utilisateur vers la page de connexion ici
      } else {
        this.error = "Une erreur s'est produite. Veuillez réessayer plus tard.";
      }
    });
   
    this.getMessage();
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
getMessage(){
    axios.get('https://apirepetiteur.wadounnou.com/api/messages').then(res=>{
                this.messagees = res.data.data.filter(result =>
                   result.user.id === this.user_id

                    );
                    console.log(this.user_id);
                    console.log( this.messagees);
            });
},
    
        saveDemande(){
            var mythis= this;


            const dataToSend = {
 name:this.name,
phone:this.phone,
email:this.email,
objet:this.objet,
message:this.message,
user_id: this.user_id,

};
const token = localStorage.getItem('token');
           
           //console.log(token);
           const config={
               headers: {
       'Authorization': 'Bearer ' + token // Bearer 14|LhMjIdjCKZjxzEeSHNOOE0eQUUCM28lHQ6JbW1pOb16e3fa8 // Remplacez par le token d'authentification réel
     }
           };
           //console.log(config);
//console.log(dataToSend);
            axios.post( 'https://apirepetiteur.wadounnou.com/api/messages',dataToSend,config ).then(res =>{

                //console.log(res.data)
               // alert(res.data.message);
               if (res.status==201) {
                localStorage.setItem('demande_id',res.data.data.id)
               this.message_id=res.data.data.id
                const userData = { 
                      message_id: this.message_id,
                      type: "message",
                      user_id: this.admin_id,
                      message: "Nouveau message",
                    };
                   // console.log(userData);
                    try {
          const Response = axios.post('https://apirepetiteur.wadounnou.com/api/notifications', userData, config);
          console.log('notification Response:', Response.data);
          if (Response.status === 201) {
           // alert('Votre Compte répétiteur est mi en evaluation');
           
          }
        } catch (Error) {
          console.error('Erreur lors de la mise en évaluationde votre compte :', Error);

        }
                    mythis.errorList="Message envoyer avec succès"
                    //alert('Message envoyer avec succès')
                    Swal.fire({
                    title: 'message envoyer avec succès',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });
                    this.$router.push('/admin/reponse')
                }
                else{
                    mythis.errorList="Une erreur s'est produite"
                   

                }
             

            })
            .catch(function(error)
           {
             
                if (error.reponse) {
                    if (error.response.status==422) {
                        mythis.errorList=error.response.data.errors;
                        console.log(error.response.data.errors);
                    }

            } else if (error.request){
                console.log(error.request);
            }else{
                console.log('Error'.error.message); 
            }
           }
            )
        }
    },
}

</script>