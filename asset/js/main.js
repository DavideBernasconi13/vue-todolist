import { todolist } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist
        }
    },
    methods: {

    },
    mounted() {
        console.log(todolist)
    }
}).mount('#app'); 