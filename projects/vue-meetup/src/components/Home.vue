<template>
    <v-container>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn dark large router to="/meetups" class="red lighten-1">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn dark large router to="/meetup/add" class="red lighten-1">Organize Meetup</v-btn>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 class="text-xs-center">
                <v-progress-circular indeterminate color="red"
                :width="7"
                :size="70"
                v-if="loading"></v-progress-circular>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2" v-if="!loading">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups" :src="meetup.imageurl" :key="meetup.id">
                        <div class="title" style="cursor: pointer;" @click="onLoadMeetup(meetup.id)">{{meetup.title}}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>


<script>
    export default {
        computed: {
          meetups () {
              return this.$store.getters.featuredMeetups
          },
          loading () {
              return this.$store.getters.loading
          }
        },
        methods: {
            onLoadMeetup (id) {
                this.$router.push('/meetups/' + id)
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        background-color: rgba(0,0,0,.5);
        color: #fff;
        font-size: 2em;
        padding: 25px;
        left: 50%;
        transform: translate(-50%);
    }
</style>