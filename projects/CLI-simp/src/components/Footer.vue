<template>
    <footer class="page-footer grey darken-3">
        <div class="container">
            <div class="row">
                <div class="col s12 l6">
                    <h5 class="white-text">SergiosVision Dev Studio</h5>
                    <p class="grey-text text-lighten-4">SergiosVision Dev Studio - is a friendly Team, Web developers and designers. We have been operating since 2016, specializing in Internet projects with original business logic.</p>
                </div>
                <div class="col s12 l6">
                    <div class="footer-social-links">
                        <h5 class="white-text center">Our social links</h5>
                        <ul>
                            <li><a href="http://facebook.com" target="_blank" title="Facebook"><i class="fa fa-facebook-official" aria-hidden="true"></i></a></li>
                            <li><a href="http://vk.com" target="_blank" title="VK"><i class="fa fa-vk" aria-hidden="true"></i></a></li>
                            <li><a href="http://twitter.com" target="_blank" title="Twitter"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col s12 m6 footer-copy-info">
                        <p><strong><a href="https://vk.com/id17932418" target="_blank">{{copy}}</a></strong> © 2017 All rights reserved.</p>
                    </div>
                    <div class="col s12 m6 footer-powered">
                        <p>Powered by <a class="orange-text text-lighten-3" href="http://materializecss.com" target="_blank">Materialize</a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<script>
    export default {
        data () {
            return {
                copy: 'SergiosVision'
            }
        }
    }
</script>

<style>

</style>