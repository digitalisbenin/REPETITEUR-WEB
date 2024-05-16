<template>
  <div class=" flex flex-col items-center justify-start  lg:pt-2 lg:pb-2">
    <img src="/src/assets/images/image5.jpg" class=" object-cover h-370 w-full" />
  </div>
  <section
    id="cardSection"
    class="overflow-hidden"
    @mouseover="pauseScrollAnimation"
    @mouseout="resumeScrollAnimation"
  >
  <div class="bg-white s  ">

    <!-- <div
      class="bg-white sm:relative md:absolute  md:top-3/4 transform translate-y-1/4"
    > -->
      <div>
        <div class="hidden sm:block md:w-full lg:w-full">
          <div class="flex">
            <div
              class="card-wrapper flex items-center justify-center"
              ref="cardWrapper"
            >
              <card-component
                v-for="(card, index) in apeResults"
                :key="index"
                :imageSrc="card.profil_imageUrl ? card.profil_imageUrl : Teamwork "
                :title="card.user.name"
                :description="card.commune.name"
                class="card-slider text-center md:card-md  lg:card-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <hr class="separator" /> -->
  <section id="clients" class="bg-white py-8">
    <div class="swiper-container mx-5" data-aos="fade-up">
      <div class="w-full" data-aos="fade-up" data-aos-delay="100">
        <div class="flex items-center justify-center">
          <!-- Utilisez une classe pour les styles communs des logos -->
          <div class="swiper-slide px-5">
            <!-- <img
              src="../../assets/img/brands/amazon.svg"
              class="mx-auto h-12 w-12"
              alt="Amazon"
            /> -->
          </div>

          <!-- Répétez le même format pour les autres logos -->
          <div class="swiper-slide px-5">
            <!-- <img
              src="../../assets/img/brands/microsoft.svg"
              class="mx-auto h-12 w-12"
              alt="Microsoft"
            /> -->
          </div>

          <div class="swiper-slide px-5">
            <!-- <img
              src="../../assets/img/brands/netflix.svg"
              class="mx-auto h-12 w-12"
              alt="Netflix"
            /> -->
          </div>

          <div class="swiper-slide px-3">
            <!-- <img
              src="../../assets/img/brands/sony.svg"
              class="mx-auto h-12 w-12"
              alt="Sony"
            /> -->
          </div>

          <div class="swiper-slide px-3">
            <!-- <img
              src="../../assets/img/brands/verizon.svg"
              class="mx-auto h-12 w-12"
              alt="Verizon"
            /> -->
          </div>
          <div class="swiper-slide px-3">
            <!-- <img
              src="../../assets/img/brands/amazon.svg"
              class="mx-auto h-12 w-12"
              alt="Amazon"
            /> -->
          </div>

          <!-- Répétez le même format pour les autres logos -->
          <div class="swiper-slide px-5">
            <!-- <img
              src="../../assets/img/brands/microsoft.svg"
              class="mx-auto h-12 w-12"
              alt="Microsoft"
            /> -->
          </div>

          <div class="swiper-slide px-5">
            <!-- <img
              src="../../assets/img/brands/netflix.svg"
              class="mx-auto h-12 w-12"
              alt="Netflix"
            /> -->
          </div>

          <div class="swiper-slide px-5">
            <!-- <img
              src="../../assets/img/brands/sony.svg"
              class="mx-auto h-12 w-12"
              alt="Sony"
            /> -->
          </div>

          <div class="swiper-slide px-5">
            <!-- <img
              src="../../assets/img/brands/verizon.svg"
              class="mx-auto h-12 w-12"
              alt="Verizon"
            /> -->
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </section>
  <section id="repetiteur" class="flex flex-col md:flex-row">
    <!-- Deux tiers à gauche -->
    <div class="w-full md:w-3/4 lg:w-3/4 sm:w-full p-2">
      <!-- Votre contenu pour la partie gauche ici -->
      <div class="bg-gray-50 mb-4">
        <div class="flex ">
          <div class="block w-full items-center">
            <!-- <form>
              <div class="flex">
                <label for="default-search" class="text-2xl px-3"
                  >Filtre par :</label
                >
              </div>
            </form> -->

            
            <div class=" lg:flex space-x-4 md:flex space-x-4 sm:w-full mx-2 ">

              
             
              <div class="flex-1 text-start">
                <form @submit.prevent="search">
                  <div class="">
                    <!-- <label class="text-2xl px-1 text-start"> Commune</label> -->
                    <!-- <input
                      type="search"
                      v-model="searchQueryVille"
                      @input="searchVille"
                      id="default-search"
                      class="flex-grow p-4 mx-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                      placeholder=""
                      required
                    /> -->
                         <!-- <div class="row-fluid">
      <select class="selectpicker" data-show-subtext="true" data-live-search="true">
        <option data-subtext="Rep California">Tom Foolery</option>
        <option data-subtext="Sen California">Bill Gordon</option>
        <option data-subtext="Sen Massacusetts">Elizabeth Warren</option>
        <option data-subtext="Rep Alabama">Mario Flores</option>
        <option data-subtext="Rep Alaska">Don Young</option>
        <option data-subtext="Rep California" disabled="disabled">Marvin Martinez</option>
      </select>
      <span class="help-inline">With <code>data-show-subtext="true" data-live-search="true"</code>. Try searching for california</span>
    </div>  -->
                    <select
                      v-model="searchQueryVill"
                      @input="searchVill"
                      id="fruits"
                      name="fruits"
                      class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Sélectionnez une commune</option>
                      <option
                        v-for="fruit in commune"
                        :key="fruit.id"
                        :value="fruit.name"
                      >
                        {{ fruit.name }}
                      </option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="flex-1 text-start">
                <form @submit.prevent="search">
                  <div class="">
                    <!-- <label
                      for="default-search"
                      class="text-2xl px-1 text-start"
                    >
                      Cycle</label
                    > -->
                    <!-- <input type="search"   v-model="searchQueryCyle" @input="searchCycle" id="default-search" class="flex-grow p-4 mx-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  required> -->
                    <select
                      v-model="searchQueryCyle"
                      @input="searchCycle"
                      id="fruits"
                      name="fruits"
                      class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Sélectionnez un cycle</option>
                      <!-- <option v-for="fruit in repetiteur" :key="fruit.id" :value="fruit.cycle">{{ fruit.cycle }}</option> -->
                      <option value="Primaires">Primaires</option>
                      <option value="Secondaires">Secondaires</option>
                      <option value="Universitaires">Universitaires</option>
                    </select>
                  </div>
                </form>
              </div>
              <div class="flex-1 text-start">
                <form @submit.prevent="search">
                  <div class="">
                    <!-- <label
                      for="default-search "
                      class="text-2xl px-1 text-start"
                      >Matière</label
                    > -->
                    <!-- <input type="search"   v-model="searchQueryMatiere" @input="searchMatiere" id="default-search" class="flex-grow p-4 mx-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""  required> -->
                    <select
                      v-model="searchQueryMatiere"
                      @input="searchMatiere"
                      id="fruits"
                      name="fruits"
                      class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Sélectionnez une matiere</option>
                      <option
                        v-for="fruit in matiere"
                        :key="fruit.id"
                        :value="fruit.name"
                      >
                        {{ fruit.name }}
                      </option>
                    </select>
                  </div>
                </form>
              </div>

              <div class="flex-1 text-start">
               
                  <div class="">
                    <!-- <label for="default-search" class="text-2xl px-1 text-start" :descriptio="card.evaluatione + '/' + card.etatse" "card.commune.namee"
                      >Disponibilité</label
                    > -->
                   
                    <select
                      v-model="searchQueryDispo"
                      @change="searchetats"
                     
                      class="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      
                      <option value="">Tous</option>
                      <option value="Disponible">Disponible</option>
                      <option value="Non disponible">Non disponible</option>
                    </select>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
        
        <div class="">
          <div v-if="paginatedCards.length > 0">
            <div class="cards-container px-2">
              <div class="flex flex-wrap justify-center">
                <Card
                  v-for="(card, index) in paginatedCards"
                  :key="index"
                  :imageSrc=" card.profil_imageUrl? card.profil_imageUrl:Teamwork"
                  :title="card.matricule "
                  :Surtitre="card.user.name"
                  :description="card.cycle + '/' + card.status"
                  
                  :productId="card.id"
                  
                  class="w-full sm:w-1/2 sm:mx-10 sm:card-xs md:w-1/5 md:card-md lg:w-1/5  mb-2 text-center"
                />
              </div>
            </div>
          </div>
          <div v-else>Aucun résultat trouvé.</div>
        </div>

        <br />

        <div class="flex justify-center mt-4">
          <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  @click.prevent="goToPage(currentPage - 1)"
                  :class="{
                    'opacity-50 cursor-not-allowed': currentPage === 1,
                  }"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li v-for="page in pages" :key="page">
                <a
                  @click.prevent="goToPage(page)"
                  :class="{
                    'z-10 flex items-center justify-center px-3 h-8 leading-tight': true,
                    'text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ':
                      currentPage === page,
                    'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ':
                      currentPage !== page,
                  }"
                >
                  {{ page }}
                </a>
              </li>

              <li>
                <a
                  @click.prevent="goToPage(currentPage + 1)"
                  :class="{
                    'opacity-50 cursor-not-allowed': currentPage === totalPages,
                  }"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 "
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <!-- Un tiers à droite -->
    <div class="w-full md:w-1/4 lg:w-1/4 sm:w-full p-2">
      <!-- Votre contenu pour la partie droite ici -->
      <div class="bg-blue-200 mb-4">
        <RepetiteurCard
          v-for="(card, index) in publicite.slice(-6)"
          :key="index"
          :image-src="card.publiciteUrl"
          :card-title="card.titre"
        />
      </div>
    </div>
  </section>


  <section class="pt-4 pb-12 bg-gray-800 mt-1">
    <div class="my-16 text-center">
      <h2
        class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
      >
        Quelques Témoignages
      </h2>
      <!-- <p class="text-xl text-white">
        L'entreprise elle-même est une entreprise très prospère. lâche sage
      </p> -->
    </div>
    <div class="grid gap-2 lg:grid-cols-3 mx-5">
      <div class="max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div class="flex justify-center -mt-16 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          />
        </div>
        <div>
          <h2 class="text-3xl font-semibold text-gray-800">PDG SIPA Sarl</h2>
          <p class="mt-2 text-gray-600">
            C'est une plateforme vraiment intéressante, car elle offre une
            variété de fonctionnalités qui en font un outil indispensable pour
            les professionnels et les particuliers.
          </p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-green-500"
            >FASSINOU Miguel</a
          >
        </div>
      </div>
      <div class="max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div class="flex justify-center -mt-16 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/04/21/15/young-3061652__340.jpg"
          />
        </div>
        <div>
          <h2 class="text-3xl font-semibold text-gray-800">
            Commercial à NSIA
          </h2>
          <p class="mt-2 text-gray-600">
            Avec une communication parfaite entre le répétiteur et moi, et un
            payement en ligne qui limite le déplacement vers l'entreprise
          </p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-green-500"
            >FIFATIN Hermione</a
          >
        </div>
      </div>
      <div class="max-w-md p-4 bg-white rounded-lg shadow-lg">
        <div class="flex justify-center -mt-16 md:justify-end">
          <img
            class="object-cover w-20 h-20 border-2 border-green-500 rounded-full"
            src="https://cdn.pixabay.com/photo/2018/01/18/17/48/purchase-3090818__340.jpg"
          />
        </div>
        <div>
          <h2 class="text-3xl font-semibold text-gray-800">
            Comptable à BGFI Banque
          </h2>
          <p class="mt-2 text-gray-600">
            Le répétiteur est patient et attentionné. Il prend le temps de
            comprendre les besoins de votre enfant et de lui fournir un
            enseignement adapté.
          </p>
        </div>
        <div class="flex justify-end mt-4">
          <a href="#" class="text-xl font-medium text-green-500"
            >KIDABILI Laure</a
          >
        </div>
      </div>
    </div>
  </section>

  

  <footer class="bg-green-600 text-white py-6">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between ml-12">
        <div class="md:w-1/3">
          <h2 class="text-2xl font-semibold mb-4">Contactez-nous</h2>

          <p class="text-lg">Abomey-Calavi, Code Postal</p>
          <p class="text-lg">Email : contact01.digitalis@gmail.com</p>
          <p class="text-lg">Téléphone : +229 97825820</p>
        </div>

        <div class="md:w-1/3 mt-4 md:mt-0">
          <h2 class="text-2xl font-semibold mb-4">Liens rapides</h2>
          <ul>
            <li><a href="/" class="hover:text-gray-400 text-lg">Accueil</a></li>
            <li>
              <a href="/#repetiteur" class="hover:text-gray-400 text-lg"
                >Rechercher un répétiteur</a
              >
            </li>
            <li>
              <a href="/login" class="hover:text-gray-400 text-lg"
                >Faire une demande</a
              >
            </li>
            <li>
              <a href="/login" class="hover:text-gray-400 text-lg">Connexion</a>
            </li>
          </ul>
        </div>

        <div class="md:w-1/3 mt-4 md:mt-0">
          <h2 class="text-2xl font-semibold mb-4">Suivez-nous</h2>
          <ul class="flex space-x-4 md:flex justify-center mt-6 ">
            <li>
              <a href="#" class="text-white hover:text-gray-400 text-lg"
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-400 text-lg"
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-400 text-lg"
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clip-rule="evenodd"
                  ></path></svg
              ></a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-gray-400 text-lg"
                ><svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path></svg
              ></a>
            </li>
          </ul>
          <h2 class="text-xl font-semibold mt-2">Notre site</h2>
          <a
            href="https://digitalis-benin.com/"
            target="blank"
            class="text-white hover:text-gray-400 text-lg"
            >digitalis-benin.com</a
          >
        </div>
      </div>
    </div>
  </footer>
  <div class="bg-gray-700 h-6">
    <h2 class="text-lg text-white text-center font-semibold">
      Copyright@ 2023 dévolopper par Digitalis
    </h2>
  </div>
</template>

<script>
import Card from "@/components/card/Card.vue";
import RepetiteurCard from "@/components/card/RepetiteurCard.vue";
import CardComponent from "@/components/card/Cards.vue";
import Combobox from "@/components/combobox/Combobox.vue";
import Teamwork from '@/assets/images/vectoriel.jpg';

import axios from "axios";

export default {
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  components: {
    Card,
    CardComponent,
    RepetiteurCard,
    Combobox,
    
  },
  setup: () => {
    return { Teamwork };
  },
  data() {
    return {
      
      items: ["Slide 1", "Slide 2", "Slide 3"],
      animationFrameId: null,
      selectedFruit: "",
      isHovered: false,
      images: [
        {
          src: "~@/src/assets/images/image.jpg",
          alt: "Image 1",
          title:
            "Bienvenu sur votre platforme pour accéder aux répétiteurs compétents pour vos enfants",
          description: "",
        },
       
      ],
      
      defautPhotoUrl:'/src/assets/images/profiles.jpg',
      currentIndex: 0,
      cards: [
        {
          imageSrc: "/src/assets/images/images.jpg",
          imageAlt: "Image 1",
          title: "DAOUDOU Eléazar",
          description: "Professeur de Maths",
        },
        {
          imageSrc: "/src/assets/images/images3.jpg",
          imageAlt: "Image 2",
          title: "FASSINOU Martial",
          description: "Professeur de PCT",
        },
        {
          imageSrc: "/assets/images/images.jpg",
          imageAlt: "Image 1",
          title: "SEFANDE Stéphane",
          description: "Professeur de Français",
        },
        {
          imageSrc: "/src/assets/images/images3.jpg",
          imageAlt: "Image 2",
          title: "DA COSTA Tony",
          description: "Professeur d' Allemand ",
        },
        // Add more cards as needed
      ],
      apiData: [],
      rep: [],
      repet: [],
      repete: [],
      loading: true,
      searchQuery: "",
      searchQueryDispo: "",
      searchQueryVille: "",
      searchQueryVill: "",
      searchQueryCyle: "",
      searchQueryMatiere: "",
      searchResults: [],
      repetiteur: [],
      repetiteurs: [],
      apeResults: [],
      aceResults: [],
      repetFiltered: [],
      autresResults: [],
      commune: [],
      repetiteurmatiereClasse: [],
      publicite: [],
      matiere: [],
      currentPage: 1,
      itemsPerPage: 20,
      totalPages: 5,
      clignote: false,
      isBlinking: false,
        commune1: [],
        commune2: [],
        cycle: [],
        disponible: [],
      
      matieres: [],
      itemse: [],
    };
  },

  async created() {
    try {
      const response = await axios.get(
        "https://apirepetiteur.wadounnou.com/api/repetiteurs"
      ); // Remplacez par votre URL d'API
      this.apiData = response.data; // Assurez-vous que la structure de votre réponse correspond à ce que vous attendez
      // console.log( this.apiData.data);
      this.autresResults = response.data.data.filter(
        (results) =>
          results.evaluation === "Evaluer" &&
          results.traitementDossiers === "Validé"
      );
// Filtrer les 5 derniers éléments de apeResults
this.apeResults = this.autresResults.slice(
    Math.max(this.apeResults.length - 6, 0)
  );



      this.repete = response.data.data.filter(
        (results) => results.traitementDossiers === "Validé"
      );
      //console.log(this.repete);
      // console.log( this.apeResults);
      this.aceResults = response.data.data.filter(
        (resultes) =>
          resultes.grade === "ACE" && resultes.traitementDossiers === "Validé"
        //  result.matiere_id.matiere.name.includes(this.searchQuery)
      );
      
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    } finally {
      this.loading = false; // Met fin au chargement une fois les données chargées
    }
  },
  computed: {
    paginatedCards() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;

      if (startIndex >= this.searchResults.length || endIndex <= 0) {
        return [];
      }

      return this.searchResults.slice(startIndex, endIndex);
    },

    showLoadMoreButton() {
      return this.currentPage * this.itemsPerPage < this.cards.length;
    },

    pages() {
      const totalCards = this.cards.length;
      const totalPages = Math.ceil(totalCards / this.itemsPerPage);

      return Array.from({ length: totalPages }, (_, index) => index + 1);
    },
    
  },

  mounted() {
    this.getRepetitieursFiltre();
    this.search();
    this.getmatiere();
    this.getCommune();
    this.searchVille();
    this.searchVill();
    this.search();
    this.getPublicité();
    this.getrepetiteur();
    this.getrepetiteurMatiere();

    // console.log(this.currentPage, this.totalPages);
  },

  methods: {
    //  getMatiereFiltre() {
    //   axios
    //     .get("https://apirepetiteur.wadounnou.com/api/communes")
    //     .then((res) => {
    //       this.commune = res.data.data;
    //       // console.log(this.commune)
    //     });
    // },
     getRepetitieursFiltre() {
      axios
        .get("https://apirepetiteur.wadounnou.com/api/repetiteurs")
        .then((res) => {
          
         this.itemse= res.data.data.filter(
        (results) => results.traitementDossiers === "Validé"
      );
           console.log(this.items)
        });
    },
    toggleBlink() {
      this.isBlinking = !this.isBlinking;
    },
    getCommune() {
      axios
        .get("https://apirepetiteur.wadounnou.com/api/communes")
        .then((res) => {
          this.commune = res.data.data;
          // console.log(this.commune)
        });
    },
    getPublicité() {
      axios
        .get("https://apirepetiteur.wadounnou.com/api/publicites")
        .then((response) => {
          this.publicite = response.data.data;
          //console.log( this.publicite);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données depuis l'API",
            error
          );
        });
    },
    getmatiere() {
      axios
        .get("https://apirepetiteur.wadounnou.com/api/matieres")
        .then((response) => {
          this.matiere = response.data.data;
          // console.log( this.matiere);
        })
        .catch((error) => {
          console.error(
            "Erreur lors de la récupération des données depuis l'API",
            error
          );
        });
    },

    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.items.length;
      }, 5000); // Changer 5000 par l'intervalle souhaité en millisecondes
    },
    loadMore() {
      // Ajoutez ici la logique pour charger plus d'éléments depuis votre source de données (définie localement)
      // Assurez-vous d'ajuster cette logique en fonction de votre situation réelle
      try {
        const newCards = this.getMoreCards(); // Remplacez par votre logique pour récupérer plus de cartes localement
        this.searchResults = this.searchResults.concat(newCards);
        this.currentPage++;
      } catch (error) {
        console.error(
          "Erreur lors du chargement des données supplémentaires",
          error
        );
      }
    },

    goToPage(page) {
      // if (page >= 1 && page <= this.pages) {
      //   this.currentPage = page;
      // }
      this.currentPage = page;
    },
    async getrepetiteur() {
      try {
        const response = await axios.get(
          "https://apirepetiteur.wadounnou.com/api/repetiteurs"
        );
        if (response.data) {
          this.repetiteur = response.data.data;
          //console.log(this.repetiteur);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    async getrepetiteurMatiere() {
      try {
        const response = await axios.get(
          "https://apirepetiteur.wadounnou.com/api/repetiteurmcs "
        );
        if (response.data) {
          this.repetiteurmatiereClasse = response.data.data;
          // console.log(this.repetiteur);
        }
      } catch (error) {
        console.log(error.data);
      }
    },
    searches(){
      
      // Filtrer les répétiteurs en fonction des critères de recherche
      let filteredRepetiteurs = this.items;
      console.log(this.items);

      if (this.searchQueryVille) {
        this.searchResults = filteredRepetiteurs.filter(repetiteur => repetiteur.ville === this.searchQueryVille);
      }

      if (this.searchQueryCyle) {
        this.searchResults = filteredRepetiteurs.filter(repetiteur => repetiteur.cycle === this.searchQueryCyle);
      }

      if (this.searchQueryMatiere) {
      }
      if (this.searchQueryDispo) {
        searchResults = filteredRepetiteurs.filter(repetiteur => repetiteur.disponibilite === this.searchQueryDispo);
      }
       console.log(this.searchResults);
    },
    search() {
      //console.log('Recherche effectuée avec :', this.searchQuery);
      try {
        // Utilisez Axios pour effectuer la requête à l'API
        axios
          .get("https://apirepetiteur.wadounnou.com/api/repetiteurs")
          .then((res) => {
            this.searchResults = res.data.data.filter(
              (result) =>
                result.traitementDossiers === "Validé" &&
                (result.adresse.includes(this.searchQuery) ||
                  result.ecole.includes(this.searchQuery) ||
                  result.niveauEtude.includes(this.searchQuery) ||
                  result.cycle.includes(this.searchQuery) ||
                  result.grade.includes(this.searchQuery) ||
                  // (result.matiere && result.matiere.name.includes(this.searchQuery)) ||
                  (result.user && result.user.name.includes(this.searchQuery)))
            );
            // console.log(this.searchResults)
          });
        // Filtrez les résultats en fonction de votre logique
        // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));
        // console.log(res.data);
        // console.log(this.searchResults);
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      }
    },
    searchVille() {
      //console.log('Recherche effectuée avec :', this.searchQueryVille);
      try {
        axios
          .get("https://apirepetiteur.wadounnou.com/api/repetiteurs")
          .then((res) => {
            this.commune1 = res.data.data.filter(
              (result) =>
                result.traitementDossiers === "Validé" &&
                //  result.adresse.includes(this.searchQueryVille)
                result.commune &&
                result.commune.name.includes(this.searchQueryVille)
            );
            this.searchResults =this.commune1
            //console.log(this.searchResults)
          });

        // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));
        // console.log(res.data);
        // console.log(this.searchResults);
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);
      }
    },
    searchVill() {
      console.log(this.itemse);
      console.log('Recherche effectuée avec :', this.searchQueryVill);
      
      try {
        axios
          .get("https://apirepetiteur.wadounnou.com/api/repetiteurs")
          .then((res) => {
            this.commune2 = res.data.data.filter(
              (result) =>
                result.traitementDossiers === "Validé" &&
                // result.adresse.includes(this.searchQueryVill)
                result.commune &&
                result.commune.name.includes(this.searchQueryVill)
            );
            //console.log(this.searchResults)
            this.searchResults =this.commune2
          });

        //console.log(res.data);
        //console.log(this.searchResults);
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);
      }
    },
    searchCycle() {
       console.log('Recherche effectuée avec :', this.searchQueryCyle);
      try {
        axios
          .get("https://apirepetiteur.wadounnou.com/api/repetiteurs")
          .then((res) => {
            this.items = res.data.data.filter(
              (result) =>
                result.traitementDossiers === "Validé" &&
                result.cycle.includes(this.searchQueryCyle)
            );
           

            if (this.commune1.length > 0) {
    
   this.cycle = this.commune1.filter((result) =>
                result.traitementDossiers === "Validé" &&
                result.cycle.includes(this.searchQueryCyle));
 this.searchResults= this.cycle
    console.log(this.searchResults)
    console.log(this.commune1)
}


if (this.commune2.length > 0) {
  console.log('object');
  //this.searchResults = this.items.filter(item => this.commune2.includes(item));
  this.cycle = this.commune2.filter((result) =>
                result.traitementDossiers === "Validé" &&
                result.cycle.includes(this.searchQueryCyle));
 this.searchResults= this.cycle
  console.log(this.searchResults)
  console.log(this.commune2)
}
            
            this.matieres=this.items
            //console.log(this.searchResults)
          });

        // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));
        // console.log(res.data);
        // console.log(this.searchResults);
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);

      }
    
    },
    searchetats() {
       console.log('Recherche effectuée avec :', this.searchQueryDispo);
       this.searchResults =this.disponible.filter(
              (result) =>
                result.traitementDossiers === "Validé" &&
                result.etats.includes(this.searchQueryDispo)
            );
      
      // try {
      //   axios
      //     .get("https://apirepetiteur.wadounnou.com/api/repetiteurs")
      //     .then((res) => {
      //       this.searchResults = res.data.data.filter(
      //         (result) =>
      //           result.traitementDossiers === "Validé" &&
      //           result.etats.includes(this.searchQueryDispo)
      //       );
      //       console.log(this.searchResults);
      //     });
      //   // Filtrez les résultats en fonction de votre logique
      //   // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));
      //   console.log(res.data);
      //   console.log(this.searchResults);
      // } catch (error) {
      //   console.error("Erreur lors de la recherche:", error);
      //   // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      // }
    },
    searchMatiere() {
      //console.log('Recherche effectuée avec :', this.searchQueryMatiere);
      try {
        // Utilisez Axios pour effectuer la requête à l'API
        axios
          .get("https://apirepetiteur.wadounnou.com/api/repetiteurmcs")
          .then((response) => {
            console.log("Réponse de l'API:", response.data.data);
            //   this.searchResults = response.data.data.filter(result =>
            //   result.status ==='Terminer'&& (
            //     result.matiere && result.matiere.name.includes(this.searchQueryMatiere)
            //  )
            //  );
            this.rep = response.data.data.filter(
              (resulte) =>
                resulte.repetiteur.traitementDossiers === "Validé" &&
                resulte.matiere &&
                resulte.matiere.name
                  .toLowerCase()
                  .includes(this.searchQueryMatiere.toLowerCase())
            );

            console.log("Résultats filtrés:", this.rep);
            console.log(this.rep);
            console.log("le tabeau repetiteur", this.cycle);
            if (this.rep && this.cycle) {
              this.repet = this.rep.map((item) => item.repetiteur.id);
              this.repetFiltered = this.cycle.filter((repeteItem) => {
                // Utilisation de some pour vérifier si l'ID de repetiteur existe dans this.rep
                return this.rep.some(
                  (repItem) => repItem.repetiteur.id === repeteItem.id
                );
              });
              this.disponible = this.repetFiltered;
              this.searchResults = this.repetFiltered;

              console.log(this.repet);
              console.log(this.repetFiltered);
            } else {
              console.error("La propriété rep est undefined.");
            }
            // Assurez-vous que rep et repete sont définis avant de continuer
            // if (this.rep && this.repete) {
            //   console.log(this.repete);
            //   console.log(this.rep);
            //   this.repetFiltered = this.repete.filter(id => this.rep.some(item => item.repetiteur.id === id));

            //   console.log(this.repetFiltered);

            // } else {
            //   console.error('Les propriétés rep ou repete sont undefined.');
            // }
          });
        // Filtrez les résultats en fonction de votre logique
        // this.searchResults = res.data.data.filter(result => result.fname === includes(this.searchQuery));

        console.log(this.searchResults);
      } catch (error) {
        console.error("Erreur lors de la recherche:", error);
        // Gérez les erreurs ici, par exemple, affichez un message d'erreur à l'utilisateur
      }
    },
    pauseScrollAnimation() {
      this.$refs.cardWrapper.style.animationPlayState = "paused";
    },
    resumeScrollAnimation() {
      this.$refs.cardWrapper.style.animationPlayState = "running";
    },

    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        this.currentIndex === 0
          ? this.images.length - 1
          : this.currentIndex - 1;
    },
  },
};
</script>
<style>
.carousel {
  background-image: url("~@/assets/images/image.jpg");
  background-size: cover;
  /* Ajustez la taille de l'image */
  background-repeat: no-repeat;
  background-position: center center;
}
/*
.carousel-slide{
  scroll-snap-align: start;
}

.slide {
  transition: transform 0.3s ease-in-out;
}



.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  cursor: pointer;
}

.prev-button {
  left: 0;
}

.next-button {
  right: 0;
}
.hidden {
  display: none;
} */
.cards-inner-container {
  white-space: nowrap;
  display: inline-flex;
  overflow: hidden;

  display: inline-flex; /* Affiche les cartes en ligne */
  /* animation: scrollAnimation 20s linear infinite; */
}
.cards-container {
  display: flex;

  overflow-x: hidden; /* Permet le défilement horizontal si nécessaire */
}
@keyframes scrollAnimation {
  from {
    transform: translateX(
      100%
    ); /* Commence à la fin pour créer un effet continu */
  }
  to {
    transform: translateX(-100%); /* Déplace les cartes vers la gauche */
  }
}

/* Appliquer des marges à gauche sauf pour la première carte */
.card {
  margin-left: 10px;
  font-size: 17px;
}

/* Ne pas appliquer de marge à gauche pour la première carte */
.card:first-child {
  margin-left: 0;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
/* footer css*/
.footer {
  background-color: #f1f1f1;
  padding: 20px;
}
.router-link-active {
  font-weight: bold;
}
.section-title {
  font-size: 2.5rem; /* Taille de la police */
  /* Poids de la police */
  color: #333; /* Couleur du texte */
  text-align: center; /* Alignement du texte */
  /* text-transform: uppercase; */ /* Convertir le texte en majuscules */
  letter-spacing: 1px; /* Espacement entre les lettres */
  /* Ajoutez d'autres propriétés CSS selon vos préférences */
}

.carousel-container {
  display: flex;
  overflow: hidden;
}

.carousel-slide {
  flex: 0 0 100%;
  transition: transform 0.5s ease;
}

.active-slide {
  transform: translateX(0);
}
.h-370 {
  height: 605px;
}
/* Animation de fondu (fade) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes swiperScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(
      -100%
    ); /* Assurez-vous que la valeur correspond à la largeur d'un élément */
  }
}
.card-container {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.card-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  animation: swiperScroll 60s linear infinite;
  white-space: nowrap;
}
.card-slide {
  flex: 0 0 auto;
}

.custom-height {
  height: 1840px; /* Ajustez la valeur de la hauteur selon vos besoins */
}
.custo-height {
  height: 1560px; /* Ajustez la valeur de la hauteur selon vos besoins */
}
.pagination-container {
  position: fixed;
  bottom: 20px; /* Ajustez cela en fonction de la position verticale souhaitée */
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff; /* Vous pouvez ajuster la couleur de fond selon vos besoins */
  z-index: 1000; /* Ajustez la valeur de z-index selon vos besoins */
  padding: 10px; /* Ajoutez un espacement intérieur pour améliorer l'apparence */
  border-radius: 8px; /* Ajoutez un arrondi aux coins si nécessaire */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Ajoutez une ombre pour améliorer la visibilité */
}
.separator {
  border: 0.25px solid black; /* Ajustez la marge selon vos besoins */
}

</style>
