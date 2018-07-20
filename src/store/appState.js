import { observable, action, computed } from 'mobx';
import startsWith from 'lodash/startsWith';
import lowerCase from 'lodash/lowerCase';
import filter from 'lodash/filter';
import PropTypes from 'prop-types';

export class AppState {
  @observable
  shops = [
    { id: 1, imageSrc: '', brand: 'Armani', discaunt: '20%' },
    { id: 2, imageSrc: '', brand: 'Versace', discaunt: '15%' },
    { id: 3, imageSrc: '', brand: 'Dolce & Gabbana', discaunt: '5%' },
    { id: 4, imageSrc: '', brand: 'Hugo Boss', discaunt: '10%' },
    { id: 5, imageSrc: '', brand: 'Prada', discaunt: '25%' }
  ];
  @observable term = '';
  @observable selectedFilters = {};
  @action
  selectedFilters(item) {
    this.selectedFilters = item;
  }

  @computed
  get getFilterItem() {
    if (this.term) {
      return filter(this.shops, item => startsWith(lowerCase(item.brand), lowerCase(this.term)));
    }

    return this.shops;
  }
}


export const appStatePropType = PropTypes.shape({
  shops: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      imageSrc: PropTypes.string,
      brand: PropTypes.string,
      discaunt: PropTypes.string
    })
  ),
  term: PropTypes.string,
  selectedFilters: PropTypes.shape({
    id: PropTypes.number,
    imageSrc: PropTypes.string,
    brand: PropTypes.string,
    discaunt: PropTypes.string
  }),
  getFilterItem: PropTypes.shape({
    id: PropTypes.number,
    imageSrc: PropTypes.string,
    brand: PropTypes.string,
    discaunt: PropTypes.string
  })
});

export const appStatePropTypeDefaults = {
  shops: [],
  term: '',
  selectedFilters: () => true,
  filteredItemsByTerm: [],
  getFilterItem: () => true
};