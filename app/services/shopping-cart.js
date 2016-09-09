import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item) {
    this.get('items').pushObject(item);
  },
  remove(item) {
    var index = this.get('items').indexOf(item);
    if (index >= 0) {
      this.get('items').removeAt(index);
    }
  },
  empty() {
    this.set('items', []);
  },
  tally(item) {
    var allItems = this.get('items');
    var totalCost = 0;
    allItems.forEach(
      function addCost(item)
      { totalCost += item.cost; console.log(item.cost);}
    );
    console.log("Hello" + totalCost);
  }
})
