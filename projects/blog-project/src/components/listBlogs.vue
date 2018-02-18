<template>
    <div class="list-blogs">
        <h1 class="all-blogs">List Blog Titles</h1>
        <input type="text" v-model="search" placeholder="search something">
        <div v-theme:column="'narrow'" class="blogs-output">
            <div v-for="blog in filtedBlogs" class="blog-item">
                <h2 v-random>Title: {{ blog.title | toUppercase }}</h2>
                <p>Content:</p>
            </div>
        </div>
    </div>
</template>


<script>

import seacrhMixin from '../mixins/searchMixin';

    export default {

        data() {
            return {
                blogs: [],
                search: ''
            }
        },
        methods: {

        },
        created() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function (data) {
                this.blogs = data.body.slice(0, 10);
            })
        },
        computed: {},

        // Local Filter

        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            },
            snippet(value) {
                return value.slice(0, 100) + '...';
            }
        },

        // Local directives

        directives: {
            'random': {
                bind(el, binding, vnote) {
                    el.style.color = "#" + Math.random().toString().slice(2,8);
                }
            }
        },
        mixins: [seacrhMixin]
    }


</script>


<style lang="sass">
    .all-blogs
        text-align: center
        .blogs-output
            margin: 0 auto
        input
            display: block
            padding: 5px
            width: 560px
            margin: 0 auto 30px auto
</style>