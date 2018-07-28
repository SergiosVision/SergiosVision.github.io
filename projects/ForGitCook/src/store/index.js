import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import menu from './modules/menu';
import recipes from './modules/recipes';
import modals from './modules/modals';

export const store = new Vuex.Store({
	modules: {
		menu,
        recipes,
		modals
	},
	strict: process.env.NODE_ENV !== 'production'
});