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
        removeItem(id) {
            const i = this.todolist.findIndex((el) => el.id === id);
            console.log(i);
            if (i !== -1)
                this.todolist.splice(i, 1)
        }

    },
    mounted() {
        console.log(todolist)
    }
}).mount('#app');
