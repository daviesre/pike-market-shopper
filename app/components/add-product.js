import Ember from 'ember';

export default Ember.Component.extend({
  addNewProduct: false,
  
  actions: {
    productFormShow() {
      this.set("addNewProduct", true);
    },

    saveProduct() {
      var params = {
        name: this.get("name"),
        shop: this.get("shop"),
        image: this.get("image"),
        description: this.get("description"),
        cost: this.get("cost")
      };
      this.set('addNewProduct', false);
      this.sendAction('saveProduct', params);
    }
  }
});
