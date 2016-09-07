import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(item) {
      this.get('shoppingCart').remove(item);
    },
    emptyCart(product) {
      this.get('shoppingCart').empty(product);
    }
  }
});
