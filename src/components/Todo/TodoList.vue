<template>
    <b-card title="Todo List" class="text-center">
        <b-card-body class="text-justify">
            <b-list-group v-if="items && items.length">
                <todo-item v-for="(item, index) in items" :item="item" :key="index"/>
            </b-list-group>
            <p v-else class="text-center">You're all caught up!</p>
        </b-card-body>       
    </b-card>
</template>

<script>
    import TodoItem from './TodoItem'
    export default {
        components:{
            TodoItem
        },
        props:{
            items: {
                type: Array,
                default: null
            }
        }
    }
</script>
