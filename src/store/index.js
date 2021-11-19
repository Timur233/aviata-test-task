import Vue from 'vue'
import Vuex from 'vuex'
import data from '../results.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airlines: data.airlines,
    flights: data.flights,
    filteredFlights: data.flights
  },
  mutations: {
    filterByAirlines (state, payload) {
      state.filteredFlights = state.flights.filter((flight) => {
        return payload.includes(flight.validating_carrier) ? flight : ''
      })
    },
    filterByTarif (state, payload) {
      console.log(payload)
      state.filteredFlights = state.flights.filter((flight) => {
        return payload.includes(flight.validating_carrier) ? flight : ''
      })
    }
  },
  actions: {
    filterFlights ({ commit }, payload) {
      commit(payload.mutation, payload.values)
    }
  },
  modules: {
  }
})
