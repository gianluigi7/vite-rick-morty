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
  created() {
    axios.get(this.store.apiUrl).then(response => {
      this.store.response = response.data.results;
      this.store.info = response.data.info;
      console.log(response.data.info);
      console.log(this.store.response[0]);
    });
  }
}
</script>
<template>
 <AppTitle/>
 <div class="container">
   <AppSearch/>
   <AppCharacterCard/>

 </div>
 <AppFooter/>
</template>