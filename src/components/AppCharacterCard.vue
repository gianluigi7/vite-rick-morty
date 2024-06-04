<script>
import { store } from '../store';
export default {
    name: 'AppCharacterCard',
    data() {
        return {
            store,
        };
    },

    
};
</script>
<template>
    <ul>
        <li v-for="card in store.response">
            <img :src=" card.image " alt="img">
           <h3> {{ card.name }} </h3> 
           <p class="mt-10"> {{ card.status }} </p> 
           <p> {{ card.species }} </p> 
        </li>
    </ul>
</template>

