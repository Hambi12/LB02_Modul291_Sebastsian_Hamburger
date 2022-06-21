import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        // Kontaktperson
        vorname: "Beat",
        nachname: "Burger",
        position: "Chef",
        // Bestellstatus
        totalBurger:5,
        burger: "23948"
    },
    getters: {
        fullName(state) {
            return `${state.vorname} ${state.nachname}`;
        },
        personEmail(state) {
            return `${state.vorname}.${state.nachname}@bearburger.ch`.toLowerCase();
        },
        jobPosition(state) {
            return `${state.position}`;
        }
    },
    mutations: {
        addBurger2(state) {
            state.totalBurger++;
        },
        removeBurger2(state) {
            if(state.totalBurger > 0) state.totalBurger--;
        },
        setOrdernumber(state, burger) {
            state.burger = burger;
        }
    }
})
