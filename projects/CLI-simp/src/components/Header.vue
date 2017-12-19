<template>
    <header>
        <div class="navbar-fixed">
            <nav class="grey darken-3" role="navigation">
                <div class="nav-wrapper container">
                    <a id="logo-container" href="#jumbotron" class="brand-logo" v-on:click="changeTitle">{{title}}</a>
                    <ul class="right hide-on-med-and-down main-navi table-of-contents">
                        <li><a href="#jumbotron">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#prices">Prices</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contacts</a></li>
                    </ul>
                    <div class="hamburger" id="hamburger">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </div>
                </div>
            </nav>
        </div>
        <div class="mob-menu">
            <ul>
                <li><a href="#jumbotron"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
                <li><a href="#services"><i class="fa fa-cogs" aria-hidden="true"></i>Services</a></li>
                <li><a href="#about"><i class="fa fa-binoculars" aria-hidden="true"></i>About</a></li>
                <li><a href="#team"><i class="fa fa-users" aria-hidden="true"></i>Our Team</a></li>
                <li><a href="#portfolio"><i class="fa fa-briefcase" aria-hidden="true"></i>Portfolio</a></li>
                <li><a href="#prices"><i class="fa fa-credit-card-alt" aria-hidden="true"></i>Prices</a></li>
                <li><a href="#testimonials"><i class="fa fa-comments-o" aria-hidden="true"></i>Testimonials</a></li>
                <li><a href="#contact"><i class="fa fa-phone" aria-hidden="true"></i>Contacts</a></li>
            </ul>
        </div>
    </header>
</template>


<script>

    import { bus } from '../main';

    export default {
        props: {
          title: {
              type: String
          }
        },
        data () {
            return {
                
            }
        },
        methods: {
            changeTitle: function () {
//                this.$emit('changeTitle', 'SergiosVision')
                this.title = 'Vue Sergios';
                bus.$emit('titleChanged', 'SergiosVision Data')
            }
        }
    }
</script>

<style>

</style>