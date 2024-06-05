import { reactive } from 'vue';

export const store = reactive({
    info: {},
    results: [],
    searchKey: '',
    apiUrl: 'https://rickandmortyapi.com/api/character',
});