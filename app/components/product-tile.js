import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  areDetailsShowing: false,

  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    showDetails: function() {
      this.set('areDetailsShowing', true);
    },
    hideDetails: function() {
      this.set('areDetailsShowing', false);
    }
  }
});
