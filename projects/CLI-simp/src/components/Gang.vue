<template>
        <section id="gang" class="container">
            <ul class="collection">
                <li class="collection-item center" v-for="person in gang" v-on:click="person.show = !person.show">
                    <h2>{{person.name}}</h2>
                    <h3 v-show="person.show">{{person.speciality}}</h3>
                </li>
            </ul>
        </section>
</template>

<script>
    export default {
        data () {
            return {
                gang: [
                    {"name":"Sergios Vision", "speciality":"Vue components", show: false},
                    {"name":"Barot Bellingham", "speciality":"HTML", show: false},
                    {"name":"Jonathan G. Ferrar II", "speciality":"Canvas", show: false},
                    {"name":"Hillary Hewitt Goldwynn-Post", "speciality":"Data Grab", show: false},
                ]
            }
        }
    }
</script>

<style>

</style>