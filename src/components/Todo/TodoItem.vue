<template>
    <b-list-group-item>
        <b-form-checkbox v-model="item.completed">
            {{item.text}}
        </b-form-checkbox>
    </b-list-group-item>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: {
                    text: 'Item',
                    completed: false
                }


            }
        }
    }
</script>