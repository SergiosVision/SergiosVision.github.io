<style lang="sass">
    nav
        background-color: #333
        padding: 20px
        margin: 0 0 40px 0
        ul
            list-style: none
            margin: 0
            padding: 0
            display: flex
            justify-content: center
            li:first-child
                margin-right: 16px
            li
                a
                    display: block
                    text-decoration: none
                    color: #fff
                    border: 1px solid #fff
                    padding: 8px 12px
                    border-radius: 5px
                    transition: .4s ease
                    &:hover
                        border-color: aqua
        .router-link-exact-active
            display: block
            text-decoration: none
            color: #fff
            border: 1px solid aqua
            padding: 8px 12px
            border-radius: 5px
            transition: .4s ease
</style>

<template>
    <nav>
        <ul>
            <li><router-link to="/">Blog</router-link></li>
            <li><router-link to="/add">Add a New Blog</router-link></li>
        </ul>
    </nav>
</template>


<script>

export default {

}


</script>