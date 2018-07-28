export default {
    namespaced: true,
    state: {
        loadedRecipes: [],
        loadedRecipe: null,
        checkEls: [],
    },
    mutations: {
        setLoadedRecipes(state, payload) {
            state.loadedRecipes = payload;
        },
        setLoadedRecipe(state, payload) {
            state.loadedRecipe = payload;
        },
        getCheckBoxes(state, payload) {
            state.checkEls = payload;
        },
    },
    actions: {
        loadRecipes({commit}, data) {
            commit('setLoadedRecipes', data);
        },
        loadRecipe({commit}, data) {
            commit('setLoadedRecipe', data);
        },
        addCheckbox({commit}, data) {
            commit('getCheckBoxes', data)
        }
    },
    getters: {
        loadedRecipes(state, getters) {
            return state.loadedRecipes;
        },
        loadedRecipe(state) {
            return state.loadedRecipe;
        },
        loadedCheckEls(state) {
            return state.checkEls;
        },
    }
}