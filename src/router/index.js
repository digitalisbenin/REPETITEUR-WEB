import { createRouter, createWebHistory } from 'vue-router'
 import  PublicLayout from '@/views/public/PublicLayout.vue';
 import HomeView from '@/views/public/HomeView.vue'
 import AboutView from '@/views/public/AboutView.vue'
 import DemandeCreate from '@/views/Demande/Create.vue'
 import Demandes from '@/views/Demande/View.vue'
 import Register from '@/views/public/Inscription/Register.vue';
 import Login from '@/views/public/Connexion/Login.vue';
 import ForgotPassword from '@/views/public/Auth/ForgotPassword.vue';
 import Partenaire from '@/views/public/ecole/partenaire.vue';
 import Librairie from '@/views/public/librairie/Librairie.vue';
 import Examens from '@/views/public/examen/Examen.vue';
 import Tutoriel from '@/views/public/tutoriel/Tutoriel.vue';
 import DetailsRepetiteur from '@/views/public/repetiteur/DétailsRepetiteur.vue';
//import { HomeView, Register,Login, AboutView ,PublicLayout } from '../views/public';
import  AdminLayout from '@/views/admin/AdminLayout.vue';
import Dashboard from '@/views/admin/Dashboard.vue';
import Repetiteur from '@/views/admin/repetiteur/View.vue';
import Profil from '@/views/admin/repetiteur/Profile.vue';
import Presence from '@/views/admin/repetiteur/Presence.vue';
import Observation from '@/views/admin/repetiteur/Observation.vue';
import Payements from '@/views/admin/payement/View.vue';
import Messages from '@/views/admin/message/Messages.vue';
import RepetiteurCreate from '@/views/admin/repetiteur/Create.vue';
import Message from '@/views/admin/message/Message.vue';
import Reponses from '@/views/admin/Reponse/Reponses.vue';
import Reponse from '@/views/admin/Reponse/Reponse.vue';
import Epreuves from '@/views/admin/Epreuves/Create.vue';
import Epreuve from '@/views/admin/Epreuves/View.vue';
import Demande from '@/views/admin/Dashboard/View.vue';
import Appreciation from '@/views/admin/Dashboard/Appreciation.vue';
import Observations from '@/views/admin/Dashboard/Observations.vue';
import EnfantsCreate from '@/views/admin/Dashboard/Create.vue';
import DemandeEnfants from '@/views/admin/Dashboard/Demande.vue';
import DashLayout from '@/layouts/DashLayout.vue';
import CommandeDash from '@/views/CommandeDash.vue';

//  import { authGuard } from '@/_helpers/auth-guard'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'public',
      component: PublicLayout,
      children:[
        { path: '/',name: 'home',component: HomeView
        },
        { path: '/register',name: 'register',component: Register
      
        },
        {path: '/login', name: 'login',component:Login
      
        },
        {path: '/auth/forgot-password', name: 'forget',component:ForgotPassword
      
        },
        {path: '/about', name: 'about',component: AboutView
        },
        {path: '/partenaires', name: 'partenaire',component: Partenaire
        },
        {path: '/librairie', name: 'librairie',component: Librairie
        },
        {path: '/examens', name: 'examens',component: Examens
        },
        {path: '/tutoriel', name: 'tutoriel',component: Tutoriel
        },
        {path: '/details/:id', name: 'details',component: DetailsRepetiteur
      },
        { path:'/:pathMatch(.*)*', redirect:'/'

      },
      ]
    },
    
    {
      path: '/admin',
      name: 'admin',
      component: AdminLayout,
      children:[
        { path: 'dashboard',name: 'dashboard',component: Dashboard 
        },
         { path: 'payements',name: 'payements',component: Payements 
          }, 
       { path: 'repetiteur',name: 'repetiteurs',component: Repetiteur 
        },
        { path: 'profil',name: 'profile',component: Profil 
      },
        { path: 'repetiteur/create',name: 'repetiteurCreate',component: RepetiteurCreate 
      },
      { path: 'epreuves',name: 'epreuves',component: Epreuves 
    },
    { path: 'epreuve',name: 'epreuve',component: Epreuve 
  },
  { path: 'messages',name: 'messages',component: Messages 
},
{ path: 'message',name: 'message',component: Message 
},

{ path: 'reponses',name: 'reponses',component: Reponses 
},

{ path: 'presence',name: 'presence',component: Presence 
},
{ path: 'observation',name: 'observation',component: Observation 
},

{ path: 'observations',name: 'observations',component: Observations 
},

{ path: 'reponse',name: 'reponse',component: Reponse 
},
        { path: 'demande',name: 'demande',component: Demande 
      },
      { path: 'appreciation',name: 'appreciation',component: Appreciation 
    },
      { path: 'demande/create',name: 'enfantsCreate',component: EnfantsCreate 
    },
    { path: 'demande/createe/:repetiteurId',name: 'demandecreate',component: DemandeEnfants,props: true 
  },
    { path:'/:pathMatch(.*)*', redirect:'/'

    },

      ]
    },

    {
      path: '/demande',
      name: 'demandees',
      component: DemandeCreate
    },
     {
       path: '/demandes',
       name: 'demandes',
       component: Demandes
     },
    {
      path: "/commandeDash",
      component: CommandeDash,
      meta: { layout: DashLayout, public: false },
    },
 
   
  ]
})

// router.beforeEach((to,from,next)=>{
//   if(to.matched[0].name == 'admin'){
//     authGuard()
//   }
//   next()
// })

export default router

