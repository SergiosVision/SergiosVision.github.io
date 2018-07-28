<template>
	<section class="sv-container mainPage">
		<div class="sv-cardsHolder">
			<router-link @click.native="clearT" tag="div" :to="'/recipes/' + item.id" class="sv-card" v-for="(item, index) in recipesL" :key="index" :data-ckal="item.caloricity" :data-cook="item.cookTime">
				<div class="sv-cardImage">
					<img :src="item.thumbnail" :alt="item.title">
				</div>
				<div class="sv-cardContent">
					<div class="sv-cardTitle">
						<h3>{{ item.title }}</h3>
					</div>
					<div class="sv-cardInfo">
						<span class="sv-cardInfoCuisine">{{ item.cuisine.title }}</span>
						<span class="sv-cardInfoCaloricity">{{ item.caloricity }} kCal</span>
					</div>
					<div class="sv-cardDescription">
						<p>{{ item.description }}</p>
					</div>
				</div>
				<div class="sv-cardAction">
					<router-link @click.native="clearT" tag="a" :to="'/recipes/' + item.id">
						<span>Read more</span>
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">
							<path fill="#FD9727" fill-rule="evenodd" d="M7.442 0l7.442 6.5L7.442 13l-1.315-1.148 5.192-4.554H0V5.702h11.319L6.127 1.148z"/>
						</svg>
					</router-link>
				</div>
			</router-link>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue';
	import { mapGetters } from 'vuex';
	import  { store } from '../../store';
    import noUiSlider from 'nouislider';
	export default {
	    data() {
	        return {

			}
		},
		methods: {
	        clearT() {
				if(!this.modalActive) {
                    this.$store.dispatch('recipes/addCheckbox', []);
					[...document.querySelectorAll('.sv-checkBoxGroup input')].map(data => {
				        data.checked = false;
					});
				}
			},
		},
        computed: {
            ...mapGetters('modals', {
                modalActive: 'modalActive'
            }),
            recipesL() {
				return this.$store.getters['recipes/loadedRecipes'];
			},
            loadedCheckEls() {
                return this.$store.getters['recipes/loadedCheckEls'];
            },

        },
		beforeRouteEnter(to, from, next) {
			Vue.http.get('https://test.space-o.ru/list.json')
				.then(resposne => resposne.json())
				.then(json => {
				    store.dispatch('recipes/loadRecipes', json.recipes);
				    next();
				})
		},
		mounted() {
			let getButtons = document.querySelectorAll('.ripple');

			for(let i = 0; i < getButtons.length; i++) {
                getButtons[i].addEventListener('click', (e) => {

                    if(e.target.classList.contains('ripple')) {
                        let y = e.clientY - e.target.getBoundingClientRect().top;
                        let x = e.clientX - e.target.getBoundingClientRect().left;


                        let rippleDiv = document.createElement("div");
                        rippleDiv.classList.add('rippleActive');
                        rippleDiv.style.cssText = `top: ${y}px; left: ${x}px`;


                        e.target.appendChild(rippleDiv);

						setTimeout(() => {
							rippleDiv.parentElement.removeChild(rippleDiv);
						}, 900);
                    }




                }, false);

            }

        }
	}
</script>