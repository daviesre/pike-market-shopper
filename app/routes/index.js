import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      shops: this.store.findAll('shop')
    });
  },
  actions: {
    // saveProduct(params) {
    //   var newProduct=this.store.createRecord('product', params);
    //   newProduct.save();
    //   this.transitionTo('index');
    // },
    saveShop(params) {
      var newShop = this.store.createRecord('shop', params);
      newShop.save();
      this.transitionTo('index');
    },
    // saveProduct(params) {
    //   var newProduct = this.store.createRecord('product', params);
    //   var shop = params.shop;
    //   shop.get('products').addObject(newProduct);
    //   console.log(newProduct);
    //   newProduct.save().then(function() {
    //     return shop.save();
    //   });
    //   this.transitionTo('shop', params.shop);
    // }
  }
});
