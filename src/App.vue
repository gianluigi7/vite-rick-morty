<script>

import AppTitle from './components/AppTitle.vue';
import AppSearch from './components/AppSearch.vue';
import AppFooter from './components/AppFooter.vue';
import AppCharacterCard from './components/AppCharacterCard.vue';
import axios from 'axios';
import { store } from './store';

export default {
  components: {
    AppTitle,
    AppSearch,
    AppFooter,
    AppCharacterCard,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    character() {

      const params = {};

    if(this.store.searchKey) {
      params.status = this.store.searchKey;
      console.log(param.status);
      
      
    }
    

    
    axios.get(this.store.apiUrl + this.store.statusUrl, {
      params,
    })
    .then(response => {
      
      this.store.response = response.data.results;
      this.store.info = response.data.info;
    },
  );
    
    
   },
   risposta() {
    this.character();
   },
  
  },
  created() {
    this.character();
  }
}
</script>
<template>
 <AppTitle/>
 <div class="container">
   <AppSearch @filtro="risposta"/>
   <AppCharacterCard/>

 </div>
 <AppFooter/>
</template>