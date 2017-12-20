<template>
    <div class="container slots">
        <h1>Please fill out our form</h1>
        <div class="row">
            <form class="col s12">
                <div id="form-header">
                    <slot name="form-header"></slot>
                </div>
                <div id="form-filed">
                    <slot name="form-fields"></slot>
                </div>
                <div id="form-controls">
                    <slot name="form-controls"></slot>
                </div>
                <div id="useful-links">
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
</template>


<script>

    export default {
        components: {

        },
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    *{
        color: #fff;
    }
    .slots {
        text-align: center;
    }
</style>
