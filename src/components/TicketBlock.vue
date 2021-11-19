<template>
  <div class="ticket-block">
    <div class="ticket-block__info ticket-info">
      <div class="ticket-info__route route">
        <div class="route__airline airline">
          <img class="airline__logo" :src="`https://aviata.kz/static/airline-logos/80x80/${flight.validating_carrier}.png`" alt="">
          <span class="airline__title">{{ airlines[flight.validating_carrier] }}</span>
        </div>
        <div class="route__dep dep">
          <span class="dep__date">{{ depDate().date }}</span>
          <span class="dep__time">{{ depDate().time }}</span>
        </div>
        <div class="route__details details">
          <div class="details__arrow">
            <span class="details__dep">
              ALA
            </span>
            <span class="details__time">
              4 ч 20 м
            </span>
            <span class="details__arr">
              TSE
            </span>
          </div>
          <div class="details__line">
            <div class="details__dot details__dot--first"></div>
            <div class="details__dot details__dot--second"></div>
            <div class="details__dot details__dot--third"></div>
          </div>
          <span class="details__info">
            через Шымкент, 1 ч 50 м
          </span>
        </div>
        <div class="route__arr arr">
          <span class="arr__date">
            {{ arrDate().date }}
          <span v-if="countFlightDays ()" class="arr__red">+{{ countFlightDays () }}</span>
          </span>
          <span class="arr__time">{{ arrDate().time }}</span>
        </div>
      </div>
      <div class="ticket-info__links links">
        <span class="links__blue">Детали перелета</span>
        <span class="links__blue">Условия тарифа</span>
        <span v-if="!flight.refundable" class="links__gray">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.62478 4.63241L2.18383 5.00007L2 3.7796L5.66142 3.22811L6.21291 6.88952L4.99244 7.07335L4.62478 4.63241Z" fill="#707276"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50024 3.53122C3.45478 4.96012 2.1168 7.33204 2.1168 10.0165C2.1168 14.3825 5.65618 17.9219 10.0222 17.9219C14.3883 17.9219 17.9277 14.3825 17.9277 10.0165C17.9277 5.66303 14.4087 2.1315 10.0601 2.11111L10.035 3.11103C13.8429 3.11795 16.9277 6.20696 16.9277 10.0165C16.9277 13.8302 13.836 16.9219 10.0222 16.9219C6.20847 16.9219 3.1168 13.8302 3.1168 10.0165C3.1168 7.82677 4.13598 5.87512 5.72584 4.61001L5.50024 4.61582V3.9987V3.53122Z" fill="#707276"/>
            <path d="M17.4363 1.8886L17.0851 1.53272L16.7292 1.88393L1.64918 16.7664L1.2933 17.1176L1.64451 17.4735L2.51148 18.3519L2.86269 18.7078L3.21857 18.3566L18.2986 3.47416L18.6545 3.12295L18.3032 2.76707L17.4363 1.8886Z" fill="#707276" stroke="white"/>
          </svg>
          невозвратный
        </span>
      </div>
    </div>
    <div class="ticket-block__offer ticket-offer">
      <span class="ticket-offer__price">
        {{ flight.price }} <span class="ticket-offer__curr">₸</span>
      </span>
      <button type="button" class="ticket-offer__button button__primary button">
        Выбрать
      </button>
      <span class="ticket-offer__price-info">
        Цена за всех пассажиров
      </span>
      <div class="ticket-offer__baggage baggage">
        <span class="baggage__weight">
          20 кг
        </span>
        <button class="baggage__button button__light button">
          + Добавить багаж
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketBlock',
  props: {
    flight: Object
  },
  computed: {
    airlines () {
      return this.$store.state.airlines
    },
    flightInfo () {
      return this.flight.itineraries[0][0]
    },
    segments () {
      return this.flight.itineraries[0][0].segments
    }
  },
  methods: {
    depDate () {
      const firstSegment = this.segments[0]
      const dateStr = firstSegment.dep_time.split(' ')

      return {
        date: dateStr[0] + ' ' + dateStr[1] + ' ' + dateStr[2].toLowerCase(),
        time: dateStr[3]
      }
    },
    arrDate () {
      const lastSegment = this.segments[this.segments.length - 1]
      const dateStr = lastSegment.arr_time.split(' ')

      return {
        date: dateStr[0] + ' ' + dateStr[1] + ' ' + dateStr[2].toLowerCase(),
        time: dateStr[3]
      }
    },
    countFlightDays () {
      const firstSegment = this.segments[0].arr_time.split(' ')
      const lastSegment = this.segments[this.segments.length - 1].arr_time.split(' ')

      return lastSegment[0] - firstSegment[0]
    }
  }
}
</script>
