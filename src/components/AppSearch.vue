<script>
export default {
    name: 'AppSearch'

    
}
</script>

<template>
   <div class="container-search">

       <input>
       <input>
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
    background-color: orange;
    padding: 6px 8px;
    border-radius: 7px;
    border: none;
    margin: 0 6px;
}

</style>