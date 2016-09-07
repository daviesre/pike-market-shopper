import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    console.log(item);
    console.log(index);
    if (index >= 0) {
      this.get('items').removeAt(index);
    }
  }
});
