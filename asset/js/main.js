import { todolist } from "./data.js";

const { createApp } = Vue;

createApp({
    data() {
        return {
            todolist: todolist
        }
    },
    methods: {
        underline(id) {
            const item = this.todolist.find((el) => {
                return el.id === id;
            })
            //console.log(item);
            if (item) {
                item.done = !item.done
            }
        },
        test() {
            console.log("crash");
        }

    },
    mounted() {
        console.log(todolist)
    }
}).mount('#app');
