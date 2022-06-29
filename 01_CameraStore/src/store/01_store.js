import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // Gründungsmitglied
        vorname: "Sebastian",
        nachname: "Hamburger",
        position: "Gründer",
        // Anzahl der Filme
        totalFilm:2,
        film: "23948"
    },
    getters: {
        fullName(state) {
            return `${state.vorname} ${state.nachname}`;
        },
        personEmail(state) {
            return `${state.vorname}.${state.nachname}@filminone`.toLowerCase();
        },
        jobPosition(state) {
            return `${state.position}`;
        }
    },
    mutations: {
        addFilm2(state) {
            state.totalFilm++;
        },
        removeFilm2(state) {
            if(state.totalFilm > 0) state.totalFilm--;
        },
        setOrdernumber(state, film) {
            state.film = film;
        }
    }
})
