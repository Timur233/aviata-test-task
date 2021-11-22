import Vue from 'vue'
import Vuex from 'vuex'
import data from '../results.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airlines: data.airlines,
    flights: data.flights,
    filteredFlights: data.flights,
    filterByTarif: [],
    filterByAirlines: []
  },
  mutations: {
    filterByAirlines (state) {
      state.filteredFlights = state.flights.filter((flight) => {
        if (this.state.filterByAirlines.length !== 0) { return this.state.filterByAirlines.includes(flight.validating_carrier) ? flight : '' }
      })
    },
    filterByTarif (state) {
      state.filteredFlights = state.flights.filter((flight) => {
        if (this.state.filterByTarif.length !== 0) { return this.state.filterByTarif.includes(flight.validating_carrier) ? flight : '' }
      })
    }
  },
  actions: {
    filterFlights ({ commit }, payload) {
      this.state[payload.mutation] = payload.values

      commit('filterByAirlines')
      commit('filterByTarif')
    }
  },
  modules: {
  }
})
