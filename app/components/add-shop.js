import Ember from 'ember';

export default Ember.Component.extend({
  addNewShop: false,

  actions: {
    shopFormShow() {
      this.set("addNewShop", true);
    },
    
    saveShop() {
    var params = {
      name: this.get("name"),
      location: this.get("location"),
      product: this.get("product"),
    };
    this.set('addNewShop', false);
    this.sendAction('saveShop', params);
    }
  }
});
