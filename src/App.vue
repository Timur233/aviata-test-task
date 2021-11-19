<template>
  <div id="app">
    <div class="container">
      <div class="grid">
        <div class="grid__col-3 sidebar">
          <CheckFilter title="Опции тарифа" :isAllCheck="false" :options="getTarifOptions()" @filter="filterFlightsByTarif" ref="CheckFilterOne"/>
          <CheckFilter title="Авиакомпании" :isAllCheck="true" :options="getAirlinesOptions()" @filter="filterFlights" ref="CheckFilterTwo"/>
          <span class="tickets-filter-clear" @click="clearAllFiltres()">
            Сбросить все фильтры
          </span>
        </div>
        <div class="grid__col-9 tickets-wrapper">

          <TicketBlock v-for="flight in flights" :key="flight.id" :flight="flight"/>

          <div v-if="flights.length === 0" class="ticket-block flights-not-found">
            Ничего не найдено
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckFilter from '@/components/CheckFilter'
import TicketBlock from '@/components/TicketBlock'

export default {
  name: 'App',
  data: function () {
    return { }
  },
  components: {
    CheckFilter,
    TicketBlock
  },
  computed: {
    airlines () {
      return this.$store.state.airlines
    },
    flights () {
      return this.$store.state.filteredFlights
    }
  },
  methods: {
    getAirlinesOptions () {
      const options = []

      Object.keys(this.airlines).forEach((key) => {
        options.push({
          value: key,
          label: this.airlines[key]
        })
      })

      return options
    },
    getTarifOptions () {
      return [
        {
          value: 'straight_only',
          label: 'Только прямые'
        },
        {
          value: 'baggage_only',
          label: 'Только с багажом'
        },
        {
          value: 'refundable',
          label: 'Только возвратные'
        }
      ]
    },
    filterFlights (values) {
      this.$store.dispatch('filterFlights', {
        mutation: 'filterByAirlines',
        values
      })
    },
    filterFlightsByTarif (values) {
      this.$store.dispatch('filterFlights', {
        mutation: 'filterByTarif',
        values
      })
    },
    clearAllFiltres () {
      this.$refs.CheckFilterOne.clearFilter()
      this.$refs.CheckFilterTwo.clearFilter()
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>
