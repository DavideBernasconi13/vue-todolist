import { todolist } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: todolist
        }
    },
    methods: {

    },
    mounted() {
        console.log(todolist)
    }
}).mount('#app');
