<template>
        <section id="gang" class="container">
            <ul class="collection">
                <li class="collection-item center" v-for="person in gang" v-on:click="person.show = !person.show">
                    <h2>{{person.name}}</h2>
                    <h3 v-show="person.show">{{person.speciality}}</h3>
                </li>
            </ul>
            <button v-on:click="deletePerson" class="hoverable waves-effect btn-large">Delete member</button>
        </section>
</template>

<script>
    export default {
        props: {
           gang: {
               type: Array,
               required: true
           }
        },
        data () {
            return {
//
            }
        },
        methods: {
            deletePerson: function () {
                this.gang.pop();
            }
        },
        //Life-cycle Hooks
        beforeCreate() {
            alert('Before has been created');
        },
        created() {
            alert('Created')
        },
        beforeMount() {
            alert('beforeMount')
        },
        mounted() {
            alert('Mounted')
        },
        beforeUpdate() {
            alert('Before Update');
        },
        updated() {
            alert('Updated');
        }
    }
</script>

<style scoped>
    #gang {
        padding: 30px 0;
    }
</style>