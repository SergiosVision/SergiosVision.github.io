<style lang="sass">
    .add-blog
        *
            box-sizing: border-box
        margin: 0 auto
        max-width: 500px
        .blog-postTitle
            text-align: center
            margin: 0 0 40px 0
            text-transform: uppercase
        .blog-form
            display: flex
            flex-direction: column
            .buttonsHolder
                align-self: flex-end
                .button
                    background-color: transparent
                    border: 1px solid #333
                    border-radius: 5px
                    color: #333
                    outline: none
                    padding: 8px 12px
                    cursor: pointer
                    transition: .3s ease
                    &:hover
                        border-color: aqua
                    &:first-child
                        margin-right: 10px
            .form-item
                display: flex
                flex-direction: column
                &:not(:last-child)
                    margin-bottom: 20px
                input, textarea
                    display: block
                    width: 100%
                    padding: 0 8px 8px 0
                    outline: none
                    border: none
                    border-bottom: 1px solid #ccc
                    color: #333
                    font-weight: bold
                    transition: .3s ease
                    &::-webkit-input-placeholder
                        color: #ccc
                    &:focus
                        border-bottom-color: aqua

                textarea
                    outline: none
                    resize: none
                    height: auto
            .checkboxes
                text-align: center
                .checkbox-item
                    display: inline-block
                    &:not(:last-child)
                        margin-right: 10px
            .authorsHolder
                margin-bottom: 30px
                select
                    margin-top: 16px
                    display: block
                    width: 100%
        .postMessage
            text-align: center
        .preview
            padding: 10px 20px
            border: 1px solid #ccc
            margin: 30px 0
            border-radius: 8px
            .categories-output
                list-style: none
                padding: 0
                margin: 0
                display: flex
                li:not(:last-child)
                    margin-right: 16px
</style>


<template>
    <div class="add-blog">
        <h2 class="blog-postTitle">Add a new blog post</h2>
        <form v-if="!submitted" class="blog-form">
            <div class="form-item">
                <input v-on:keyup="clear" v-model="blog.title" type="text" placeholder="Blog Title" required>
            </div>
            <div class="form-item">
                <textarea v-on:keyup="clear" v-model="blog.content" placeholder="Blog Content"></textarea>
            </div>
            <div class="checkboxes">
                <div class="checkbox-item">
                    <label for="box1">box 1</label>
                    <input v-on:click="clear" type="checkbox" value="box1" id="box1" v-model="blog.categories">
                </div>
                <div class="checkbox-item">
                    <label for="box2">box 2</label>
                    <input v-on:click="clear" type="checkbox" value="box2" id="box2" v-model="blog.categories">
                </div>
                <div class="checkbox-item">
                    <label for="box3">box 3</label>
                    <input v-on:click="clear" type="checkbox" value="box3" id="box3" v-model="blog.categories">
                </div>
            </div>
            <div class="authorsHolder">
                <label>Author:</label>
                <select v-on:click="clear" v-model="blog.author">
                    <option v-for="authorr in authors" v-bind:value="authorr.value">{{ authorr.text }}</option>
                </select>
            </div>
            <div class="buttonsHolder">
                <button type="button" class="send button" v-on:click.prevent="post">Add</button>
                <button type="button" class="clearFields button" v-on:click="clearForm">Clear Fields</button>
            </div>
        </form>
        <div v-if="submitted">
            <h3 class="postMessage">Thanks for adding your post!</h3>
        </div>
        <div class="error">
            <h3 v-for="error in errors" style="color: red">{{ error }}</h3>
        </div>
        <div class="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog Categories:</p>
            <ul class="categories-output">
                <li v-for="category in blog.categories">{{ category }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>
        </div>
    </div>
</template>


<script>

export default {

    data() {
        return {
            blog: {
                title: '',
                content: '',
                categories: [],
                author: ''
            },
            authors: [
                {text: 'Sergios Vison', value: 'Sergios Vison'},
                {text: 'Black Brother', value: 'Black Brother'},
                {text: 'Some Man', value: 'Some Man'}
            ],
            submitted: false,
            errors: []
        }
    },
    methods: {
        clearForm: function (e) {
            e.preventDefault();
            this.blog.title = this.blog.content = this.blog.author = '';
            this.blog.categories = [];
            this.submitted = false;
            this.errors = [];
        },
        clear: function () {
            this.errors = [];
        },
        post: function (e) {
            e.preventDefault();
            if ((this.blog.title === '') || (this.blog.content === '') || (this.blog.categories === '') || (this.blog.author === '')) {
                    this.errors.push('Title is required.');
            } else {
                this.errors = [];
                this.$http.post('https://vue-blog-8527d.firebaseio.com/posts.json', this.blog).then(function (data) {
                    this.submitted = true;
                });
            }
        }
    }
}


</script>