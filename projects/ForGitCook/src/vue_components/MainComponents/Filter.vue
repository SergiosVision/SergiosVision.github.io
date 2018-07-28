<template>
    <div class="sv-filterWrapper">
        <button class="sv-filterButton ripple light" @click="showModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16"><path fill="#FFF" fill-rule="evenodd" d="M4 9.23V6.77h15v2.46H4zM.25.5h22.5v2.52H.25V.5zm8.73 15v-2.52h5.04v2.52H8.98z"/></svg>
        </button>
        <transition name="modal">
            <div class="sv-filterDialog" v-show="modalActive">
                <div class="sv-filterCtrls">
                    <div class="sv-closeFilter" @click="hideModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#757575" fill-rule="evenodd" d="M20 2.027L12.027 10 20 17.973 17.973 20 10 12.027 2.027 20 0 17.973 7.973 10 0 2.027 2.027 0 10 7.973 17.973 0z"/></svg>
                    </div>
                    <div class="sv-filterClear">
                        <span @click="clearAll">Clear all</span>
                    </div>
                    <div class="sv-filterFilter">
                        <button class="ripple light" @click.prevent="filterThisStuff() + hideModal()">See recipes</button>
                    </div>
                </div>
                <div class="sv-filterBody">
                    <div class="sv-filterAccordion">
                        <div class="sv-filterAccordionTrigger" :class="cl" @click="toggleAccordion">
                            <h3>Cuisine</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6"><path fill="#000" fill-rule="evenodd" d="M8.82 6L5 2.272 1.18 6 0 4.854 5 0l5 4.854z"/></svg>
                        </div>
                        <transition name="accordion"
                                    v-on:before-enter="beforeEnter" v-on:enter="enter"
                                    v-on:before-leave="beforeLeave" v-on:leave="leave">
                            <div class="sv-filterAccordionBody" v-show="isOpen">
                                <ul class="sv-mainList">
                                    <li v-for="(item, index) in categoriesList" :key="index">
                                        <div class="sv-checkBoxGroup">
                                            <label class="material-checkbox">
                                                <input @change="storeBox" v-model="checkedBoxes" :value="item.title.toLowerCase()" type="checkbox">
                                                <span>{{ item.title }}</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>
                    <div class="sv-filterRangeHolder">
                        <div class="sv-caloriesRange default">
                            <h3>Calories Range</h3>
                            <div class="sv-caloriesTitle">
                                <p>
                                    <span>{{ minCalories }}</span> kCal
                                    -
                                    <span>{{ maxCalories }}</span> kCal
                                </p>
                            </div>
                            <div class="rangeHolderEl">
                                <div id="caloriesRange"></div>
                            </div>
                        </div>
                        <div class="sv-cookRange default">
                            <h3>Cooking Time</h3>
                            <div class="sv-cookingTitle">
                                <p>
                                    <span>{{ minCooking }}</span> sec
                                    -
                                    <span>{{ maxCooking }}</span> sec
                                </p>
                            </div>
                            <div class="rangeHolderEl">
                                <div id="cookingRange"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { mapMutations, mapGetters } from 'vuex';
    import  { store } from '../../store';
    import noUiSlider from 'nouislider';
    export default {
        data() {
            return {
                minCalories: '',
                maxCalories: '',
                minCooking: '',
                maxCooking: '',
                categoriesList: [
                    {
                        title: 'Chinese'
                    },
                    {
                        title: 'Caribbean'
                    },
                    {
                        title: 'French'
                    },
                    {
                        title: 'Greek'
                    },
                    {
                        title: 'Indian'
                    }
                ],
                isOpen: true,
                checkedBoxes: []
            }
        },
        methods: {
            ...mapMutations('modals', ['showModal', 'hideModal']),
            storeBox() {
                this.$store.dispatch('recipes/addCheckbox',this.checkedBoxes)
            },

            clearAll() {
                let getCards = document.querySelectorAll('.sv-cardsHolder .sv-card');
                [...getCards].map(data => {
                    data.classList.remove('hidden');
                });
                this.checkedBoxes = [];
                this.$store.dispatch('recipes/addCheckbox', []);
                this.minCalories = '0';
                this.maxCalories = '10000';
                this.minCooking = '0';
                this.maxCooking = '11880';
                document.querySelector('#caloriesRange').noUiSlider.reset();
                document.querySelector('#cookingRange').noUiSlider.reset();
            },

            filterThisStuff() {
                let getCards = document.querySelectorAll('.sv-cardsHolder .sv-card');
                return [...getCards].filter(data => {
                    if(!this.loadedCheckEls.length) {
                        if((data.getAttribute('data-ckal') >= this.minCalories && data.getAttribute('data-ckal') <= this.maxCalories)
                            && (data.getAttribute('data-cook') >= this.minCooking && data.getAttribute('data-cook') <= this.maxCooking)
                        ) {
                            data.classList.remove('hidden');
                        } else {
                            data.classList.add('hidden');
                        }
                    } else {
                        if(this.loadedCheckEls.includes(data.querySelector('.sv-cardInfoCuisine').textContent.toLowerCase())
                            && (data.getAttribute('data-ckal') >= this.minCalories && data.getAttribute('data-ckal') <= this.maxCalories)
                            && (data.getAttribute('data-cook') >= this.minCooking && data.getAttribute('data-cook') <= this.maxCooking)
                        ) {
                            data.classList.remove('hidden');
                        } else {
                            data.classList.add('hidden');
                        }
                    }

                })
            },

            toggleAccordion(index) {
                if(this.isOpen === false) {
                    this.isOpen = true;
                } else {
                    this.isOpen = false;
                }
            },
            beforeEnter: function(el) {
                el.style.maxHeight = '0';
            },
            enter: function(el) {
                el.style.maxHeight = el.scrollHeight + 'px'
            },
            beforeLeave: function(el) {
                el.style.maxHeight = el.scrollHeight + 'px';
            },
            leave: function(el) {
                el.style.maxHeight = '0';
            },
            callCaloriesSlider(item) {
                const slide = item.caloriesRange;
                noUiSlider.create(slide, {
                    start: [0, 10000],
                    connect: true,
                    step: 1,
                    range: {
                        'min': 0,
                        'max': 10000
                    }
                });
                slide.noUiSlider.on('update', (values) => {
                    this.minCalories = parseInt(values[0]);
                    this.maxCalories = parseInt(values[1]);
                })
            },
            callCookingSlider(item) {
                const slide = item.cookingRange;
                noUiSlider.create(slide, {
                    start: [0, 11880],
                    connect: true,
                    step: 1,
                    range: {
                        'min': 0,
                        'max': 11880
                    }
                });
                slide.noUiSlider.on('update', (values) => {
                    this.minCooking = parseInt(values[0]);
                    this.maxCooking = parseInt(values[1]);
                })
            },

        },
        computed: {
            ...mapGetters('modals', {
                modalActive: 'modalActive'
            }),
            loadedCheckEls() {
                return this.$store.getters['recipes/loadedCheckEls']
            },
            cl() {return this.isOpen === true ? 'is-opened' : '';},

        },
        mounted() {
            let getRanges = {
                caloriesRange: document.querySelector('#caloriesRange'),
                cookingRange: document.querySelector('#cookingRange')
            };
            this.callCaloriesSlider(getRanges);
            this.callCookingSlider(getRanges);
        },
    }
</script>