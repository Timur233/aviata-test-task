<template>
  <div id="app">
    <div class="container">
      <div class="grid">
        <div class="grid__col-3 sidebar">
          <div class="tickets-filter sidebar__filter-block">
            <div class="tickets-filter__title-block">
              <span class="tickets-filter__title">
                Опции тарифа
              </span>
              <button class="tickets-filter__clear-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z" fill="#B9B9B9"/>
                </svg>
              </button>
            </div>
            <div class="tickets-filter__options options-list">
              <div class="options-list__item" for="opt-tarif-1">
                <input id="opt-tarif-1" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-tarif-1" class="options-list__label">Только прямые</label>
              </div>
              <div class="options-list__item">
                <input id="opt-tarif-2" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-tarif-2" class="options-list__label">Только с багажом</label>
              </div>
              <div class="options-list__item">
                <input id="opt-tarif-3" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-tarif-3" class="options-list__label">Только возвратные</label>
              </div>
            </div>
          </div>
          <div class="tickets-filter sidebar__filter-block">
            <div class="tickets-filter__title-block">
              <span class="tickets-filter__title">
                Авиакомпании
              </span>
              <button class="tickets-filter__clear-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 8.64648L13.2929 6.00004L10.6464 3.35359L11.3535 2.64648L14 5.29293L16.6464 2.64648L17.3535 3.35359L14.7071 6.00004L17.3535 8.64648L16.6464 9.35359L14 6.70714L11.3535 9.35359L10.6464 8.64648ZM2.91465 6.00003H8C8 6.34074 8.0284 6.67482 8.08296 7.00003H2.91465C2.70873 7.58263 2.15311 8.00003 1.5 8.00003C0.671573 8.00003 0 7.32846 0 6.50003C0 5.6716 0.671573 5.00003 1.5 5.00003C2.15311 5.00003 2.70873 5.41743 2.91465 6.00003ZM7.91465 10H9.52779C9.86799 10.3801 10.2559 10.7166 10.6822 11H7.91465C7.70873 11.5826 7.15311 12 6.5 12C5.84689 12 5.29127 11.5826 5.08535 11H0.5C0.223858 11 0 10.7762 0 10.5C0 10.2239 0.223858 10 0.5 10H5.08535C5.29127 9.41743 5.84689 9.00003 6.5 9.00003C7.15311 9.00003 7.70873 9.41743 7.91465 10ZM2.91465 14C2.70873 13.4174 2.15311 13 1.5 13C0.671573 13 0 13.6716 0 14.5C0 15.3285 0.671573 16 1.5 16C2.15311 16 2.70873 15.5826 2.91465 15H14.5C14.7761 15 15 14.7762 15 14.5C15 14.2239 14.7761 14 14.5 14H2.91465Z" fill="#B9B9B9"/>
                </svg>
              </button>
            </div>
            <div class="tickets-filter__options options-list">
              <div class="options-list__item" for="opt-airlines-1">
                <input id="opt-airlines-1" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-1" class="options-list__label">Все</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-2" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-2" class="options-list__label">Air Astana</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-3" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-3" class="options-list__label">Bek Air</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-4" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-4" class="options-list__label">Fly Arystan</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-5" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-5" class="options-list__label">SCAT Airlines</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-6" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-6" class="options-list__label">Lufthansa</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-7" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-7" class="options-list__label">Turkish Airlines</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-8" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-8" class="options-list__label">China Southern Air</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-9" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-9" class="options-list__label">Test 1</label>
              </div>
              <div class="options-list__item">
                <input id="opt-airlines-10" class="input__check options-list__checkbox" type="checkbox">
                <label for="opt-airlines-10" class="options-list__label">Test 2</label>
              </div>
            </div>
          </div>
          <span class="tickets-filter-clear">
            Сбросить все фильтры
          </span>
        </div>
        <div class="grid__col-9 tickets-wrapper">
          <div class="ticket-block">
            <div class="ticket-block__info ticket-info">
              <div class="ticket-info__route route">
                <div class="route__airline airline">
                  <img class="airline__logo" src="data:image/png;base64,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" alt="">
                  <span class="airline__title">Air Astana</span>
                </div>
                <div class="route__dep dep">
                  <span class="dep__date">25 ноя, вс</span>
                  <span class="dep__time">23:25</span>
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
                    25 ноя, вс
                  <span class="arr__red">+1</span>
                  </span>
                  <span class="arr__time">23:25</span>
                </div>
              </div>
              <div class="ticket-info__links links">
                <span class="links__blue">Детали перелета</span>
                <span class="links__blue">Условия тарифа</span>
                <span class="links__gray">
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
                590 240 <span class="ticket-offer__curr">₸</span>
              </span>
              <buttom type="button" class="ticket-offer__button button__primary button">
                Выбрать
              </buttom>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
  @import './assets/scss/style.scss';
</style>
