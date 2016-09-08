import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('shop', params.shop_id);
  },
  actions: {
    saveProduct(params) {
      var newProduct = this.store.createRecord('product', params);
      var shop = params.shop;
      shop.get('products').addObject(newProduct);
      console.log(newProduct);
      newProduct.save().then(function() {
        return shop.save();
      });
      this.transitionTo('shop', params.shop);
    }
  }
});
