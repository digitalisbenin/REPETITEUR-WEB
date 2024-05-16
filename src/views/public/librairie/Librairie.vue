
  <!-- <main >
    <h1>Page a propos</h1>
  </main> -->
  <template>
    <div class="">
      <div style="overflow: hidden" class="bg-neutral-30" >
        <br>
        <br>
        <br>
        <br>
        <h2 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4 text-center pt-5"> LES LIBRAIRIES PARTENAIRES</h2>
          <div class="2xl:container 2xl:mx-auto lg:py-1 lg:px-20 md:py-12 md:px-6 py-1 px-4 ">
  
              <div class="flex lg:flex-row flex-col justify-between gap-4 pt-2 bg-white">
                
                
                <div class="w-full lg:w-12/12 lg:pt-4">
                  
                    <CardComponent  v-for="(card, index) in librairie" :key="index"
                    :imageSrc="card.librairieUrl"
                    :name="card.name"
                    
                    :resultat="card.description"
                    
                    class="bg-gray-200 mb-4"
                    />
                </div>
            </div>

          
          </div>
        </div>
    </div>
    
  </template>
  
  <script>
  import axios from 'axios'
  import CardComponent from '../../../components/card/CardItem.vue';
  export default {
    components: {
    CardComponent,
  },
  data(){
        return{
            librairie: [],
           
        }
    },
  
  mounted(){
    
      this.getLibrairie();
      },

  methods:{
    getLibrairie(){
      axios.get('https://apirepetiteur.wadounnou.com/api/librairies',)
   .then(response => {
     this.librairie = response.data.data;
     //console.log( this.librairie);
     
   })
   .catch(error => {
        console.error('Erreur lors de la récupération des données depuis l\'API', error);
      });
    },
  }
  
  }
  </script>
  
  <style>
  .custo-background {
    background-image: url('../../../assets/images/images4.jpg');
    /* Remplacez 'votre-image.jpg' par le nom de votre image */
    background-size: cover;
    /* Ajustez la taille de l'image */
    background-repeat: no-repeat;
    background-position: center center;
    /* Centrez l'image */
    /* Ajoutez d'autres styles Tailwind CSS ou CSS personnalisés au besoin */
  }
  
  </style>

