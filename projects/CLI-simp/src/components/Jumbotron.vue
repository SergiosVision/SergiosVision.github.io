<template>
    <section class="section jumbotron scrollspy" id="jumbotron">
        <div class="container">
            <div>
                <div class="row">
                    <div class="col s12 center">
                        <div class="welcome">
                            <h5>Development Studio</h5>
                            <h1>{{about}}</h1>
                            <div class="divider"></div>
                            <div class="btn-section">
                                <a href="#services" class="pink darken-1 hoverable waves-effect waves-red btn-large"><i class="material-icons left">visibility</i>What We Do?</a>
                                <a href="#contact" class="pink darken-1 hoverable waves-effect waves-red btn-large"><i class="material-icons left">phone</i>Our Contacts</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data () {
            return {
                about: 'Vue Example'
            }
        }
    }
</script>

<style>

</style>