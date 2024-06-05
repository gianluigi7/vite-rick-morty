<script>
import { store } from '../store';


export default {
    name: 'AppSearch',
    data() {

    },
    methods: {
        searchStatus() {
            console.log('funziona');
        }
    }
    
}
</script>

<template>
   <div class="container-search">

       <input placeholder="Search character" type="text">
      
       <select @change="searchStatus"> <!--  v-model="store.searchKey" -->
        <option selected value="">Select status</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
       </select>
       <button>Search</button>
       <button>Reset</button>
    </div>
</template>

<style scoped>
 .container-search {
    max-width: fit-content;
    margin: 0 auto;
}
button {
    background-color: #0a6efd;
    padding: 0 8px;
    border-radius: 7px;
    border: none;
    margin: 0 6px;
    height: 28px;
    color: white;
}
button:last-child {
    background-color: #ffc106;
    color: black;
}

</style>