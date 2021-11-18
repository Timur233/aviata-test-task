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
            <div class="ticket-block__info">

            </div>
            <div class="ticket-block__offer ticket-offer">
              <span class="ticket-block__price">
                590 240 <span class="ticket-block_curr">₸</span>
              </span>
              <buttom type="button" class="ticket-block__button button__primary">
                Выбрать
              </buttom>
              span.ticket-block__price+3
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
