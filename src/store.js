import { reactive } from 'vue';

export const store = reactive({
    info: {},
    results: [],
    searchKey: '',
    Url: '',
    apiUrl: 'https://rickandmortyapi.com/api/character',
    statusUrl:'?name=rick&status=',
    
});