<template>
    <section class="sv-container insidePage">
        <div class="sv-singleRecipeHolder">
            <div class="sv-singleRecipeCarousel">
                <div class="sv-singleRecipeCarouselSlideWrapper" v-for="(item, index) in single.images">
                    <img :src="item" :alt="single.title">
                </div>
            </div>
            <div class="sv-singleRecipeCookInfo">
                <div class="sv-singleRecipeCookInfoCuisine">
                    <span>{{ single.cuisine.title }}</span>
                </div>
                <div class="sv-singleRecipeCookInfoTitle">
                    <h3 class="sv-title">{{ single.title }}</h3>
                </div>
                <div class="sv-singleRecipeCookSubInfo">
                    <div class="sv-singleRecipeCookSubInfoTime sv-singleRecipeCookSubInfoGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#BDBDBD" fill-rule="evenodd" d="M9.333 4.333V9A.33.33 0 0 1 9 9.333H5.667A.33.33 0 0 1 5.333 9v-.667A.33.33 0 0 1 5.667 8H8V4.333A.33.33 0 0 1 8.333 4H9a.33.33 0 0 1 .333.333zM13.667 8A5.673 5.673 0 0 0 8 2.333 5.673 5.673 0 0 0 2.333 8 5.673 5.673 0 0 0 8 13.667 5.673 5.673 0 0 0 13.667 8zM16 8c0 4.417-3.583 8-8 8s-8-3.583-8-8 3.583-8 8-8 8 3.583 8 8z"/></svg>
                        <span>{{ single.cookTime }}</span>
                    </div>
                    <div class="sv-singleRecipeCookSubInfoDifficulty sv-singleRecipeCookSubInfoGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13"><path fill="#BDBDBD" fill-rule="evenodd" d="M9.143 11.429h5.714v-1.143H9.143v1.143zM5.714 6.857h9.143V5.714H5.714v1.143zm5.715-4.571h3.428V1.143H11.43v1.143zM16 9.714V12a.575.575 0 0 1-.571.571H.57A.575.575 0 0 1 0 12V9.714c0-.312.259-.571.571-.571H15.43c.312 0 .571.259.571.571zm0-4.571v2.286a.575.575 0 0 1-.571.571H.57A.575.575 0 0 1 0 7.429V5.143c0-.313.259-.572.571-.572H15.43c.312 0 .571.26.571.572zM16 .57v2.286a.575.575 0 0 1-.571.572H.57A.575.575 0 0 1 0 2.857V.571C0 .26.259 0 .571 0H15.43c.312 0 .571.259.571.571z"/></svg>
                        <span>{{ single.difficulty }}</span>
                    </div>
                    <div class="sv-singleRecipeCookSubInfoCaloricity sv-singleRecipeCookSubInfoGroup">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18"><path fill="#AEAEAE" fill-rule="evenodd" d="M6.429.643A.647.647 0 0 0 5.786 0a.647.647 0 0 0-.643.643V4.82a.647.647 0 0 1-.643.643.647.647 0 0 1-.643-.643V.643A.647.647 0 0 0 3.214 0a.647.647 0 0 0-.643.643V4.82a.647.647 0 0 1-.642.643.647.647 0 0 1-.643-.643V.643A.647.647 0 0 0 .643 0 .647.647 0 0 0 0 .643V7.07A1.94 1.94 0 0 0 1.286 8.89v7.824c0 .703.582 1.286 1.285 1.286h1.286c.703 0 1.286-.583 1.286-1.286V8.89A1.94 1.94 0 0 0 6.429 7.07V.643zm7.714 0A.647.647 0 0 0 13.5 0h-2.571a3.224 3.224 0 0 0-3.215 3.214v8.036c0 .17.151.321.322.321h2.25v5.143c0 .703.582 1.286 1.285 1.286h1.286c.703 0 1.286-.583 1.286-1.286V.643z"/></svg>
                        <span>{{ single.caloricity }}</span>
                    </div>
                </div>
            </div>
            <div class="sv-singleRecipeIngredients">
                <h1 class="sv-title">Ingredients</h1>
                <ul class="sv-mainList sv-mainListCard">
                    <li v-for="(item, index) in single.ingredients">
                        <div class="sv-listCircle">
                            <span></span>
                        </div>
                        <span>{{ item }}</span>
                    </li>
                </ul>

            </div>
            <div class="sv-singleRecipeInstructios">
                <h1 class="sv-title">Instructions</h1>
                <ul class="sv-mainList sv-mainListCard">
                    <li v-for="(item, index) in single.instructions">
                        <div class="sv-listCircle">
                            <span class="sv-circle">
                                <span>{{ index + 1 }}</span>
                            </span>
                        </div>
                        <span>{{ item }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import Vue from 'vue';
    import { mapGetters } from 'vuex';
    import { store } from '../store';

    export default {
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('recipes', {
                single: 'loadedRecipe'
            })
        },
        beforeRouteEnter(to, from, next) {
            Vue.http.get(`https://test.space-o.ru/detail_${to.params.id}.json`)
                .then(response => response.json())
                .then(json => {
                    store.dispatch('recipes/loadRecipe', json.recipe);
                    next()
                })
        },
        mounted() {
            console.log(this.single)
        }
    }
</script>