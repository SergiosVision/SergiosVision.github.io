<template>
    <header :class="{'sv-yellow sv-yellowFilterHide': $route.path !== '/'}">
        <div class="sv-headerMainContainer">
            <filter-app></filter-app>
            <section class="sv-headerTop">
                <div class="sv-headerLogo">
                    <router-link tag="h1" to="/">AirRecipes</router-link>
                </div>
                <div class="sv-headerSearchBar">
                    <div class="sv-searchIcon" @click="mobileSearchBarO">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24"><defs><filter id="a" width="100.8%" height="115.6%" x="-.3%" y="-6.2%" filterUnits="objectBoundingBox"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="1.5"/><feColorMatrix in="shadowBlurOuter1" result="shadowMatrixOuter1" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.34 0"/><feMerge><feMergeNode in="shadowMatrixOuter1"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path fill="#FFF" fill-rule="evenodd" d="M12.5 11h-.79l-.28-.27A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 1 0 6.5 13c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L17.49 16l-4.99-5zm-6 0C4.01 11 2 8.99 2 6.5S4.01 2 6.5 2 11 4.01 11 6.5 8.99 11 6.5 11z" filter="url(#a)" transform="translate(3 2)"/></svg>
                    </div>
                    <div class="sv-group">
                        <input type="text" required>
                        <span class="bar"></span>
                        <label>Search</label>
                    </div>
                </div>
                <transition name="mobileBar">
                    <div id="sv-mobileSearchBar" class="sv-mobileSearchBar" v-show="mobileBar">
                        <div class="sv-closeSearch" @click="mobileSearchBarC">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#757575" fill-rule="evenodd" d="M20 2.027L12.027 10 20 17.973 17.973 20 10 12.027 2.027 20 0 17.973 7.973 10 0 2.027 2.027 0 10 7.973 17.973 0z"/></svg>
                        </div>
                        <input type="text" placeholder="Search">
                    </div>
                </transition>
            </section>
            <section class="sv-headerBottom">
                <h1 class="sv-headerBottomTitle">Find the best recipes!</h1>
            </section>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                mobileBar: false
            }
        },
        methods: {
            headerCtrl() {
                let scrolled = window.pageYOffset || document.documentElement.scrollTop;
                let getHeaderHeight = this.$el.getBoundingClientRect().height;
                if(this.$route.path === '/') {
                    if(scrolled >= getHeaderHeight) {
                        this.$el.classList.add('sv-yellow', 'sv-headerMainPage');
                    } else {
                        this.$el.classList.remove('sv-yellow', 'sv-headerMainPage');
                    }
                }
            },
            mobileSearchBarO() {
                if(window.innerWidth <= 540) {
                   this.mobileBar = true;
                }
            },
            mobileSearchBarC() {
                this.mobileBar = false;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.headerCtrl ,false);
            let specEl = document.getElementById('.sv-mobileSearchBar');
            window.addEventListener('click', (e) => {

            });

        }

    }
</script>

<style>

</style>