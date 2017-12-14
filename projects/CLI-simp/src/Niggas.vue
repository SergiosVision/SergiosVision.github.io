<template>
    <ul>
        <li v-for="nigga in niggas">{{nigga}}</li>
    </ul>
</template>

<script>
    export default {
        data () {
            return {
                niggas: ['Gucci Mane', 'Lil Uzi Vert', 'Sergios Vision', 'Juicy J'],
            }
        }
    }
</script>

<style>

</style>
