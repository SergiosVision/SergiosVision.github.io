export default {
    namespaced: true,
    state: {
        modalActive: false
    },
    mutations: {
        showModal(state) {
            state.modalActive = true;
        },
        hideModal(state) {
            state.modalActive = false;
        }
    },
    actions: {

    },
    getters: {
        modalActive(state) {
            return state.modalActive;
        }
    }
}