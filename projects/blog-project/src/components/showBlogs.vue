<style lang="sass">
    .all-blogs
        margin-top: 0
        text-align: center
    .blog-item
        &:not(:last-child)
            padding-bottom: 15px
            border-bottom: 1px solid #fff
        a
            color: #333
            transition: .4s ease
            display: block
            text-decoration: none
        &:hover
            a
                opacity: .7
    .blogs-output
        margin: 0 auto
    input.search
        display: block
        padding: 5px
        width: 560px
        margin: 0 auto 30px auto
</style>

<template>
    <div class="show-blogs">
        <h1 class="all-blogs">All Blog Articles</h1>
        <input class="search" type="text" v-model="search" placeholder="search something">
        <div v-theme:column="'narrow'" class="blogs-output">
            <div v-for="blog in filtedBlogs" class="blog-item">
                <router-link v-bind:to="'/blog/' + blog.id">
                    <h2>Title: {{ blog.title | toUppercase }}</h2>
                    <p>Content:</p>
                    <article>{{ blog.content | snippet }}</article>
                    <p>Author: {{ blog.author }}</p>
                </router-link>
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
            this.$http.get('https://vue-blog-8527d.firebaseio.com/posts.json').then(function (data) {
                return data.json();
            }).then(function (data) {
                let blogsArr = [];
                for(let key in data) {
                    data[key].id = key;
                    blogsArr.push(data[key]);
                }
                this.blogs = blogsArr;
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