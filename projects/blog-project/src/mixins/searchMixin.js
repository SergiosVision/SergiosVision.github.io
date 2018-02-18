export default {
    computed: {
        filtedBlogs: function () {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search) || blog.content.match(this.search) || blog.author.match(this.search);
            });
        }
    }
}