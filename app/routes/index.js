import Ember from 'ember';

// var items = [{
//   name: "Mac & Cheese",
//   image:"http://pikeplacemarket.org/sites/default/files/styles/merchant/public/IMG_9632.jpg?itok=NZTMs5V_",
//   description: "Cheese made by people with blue hands",
//   shop: "Beecher's Handmade Cheese",
//   cost: 8,
// }, {
//   name: "Pasta",
//   image:"http://pikeplacemarket.org/sites/default/files/styles/merchant/public/Taste_FreshMozz_015.jpg?itok=PWNmnFSG",
//   description: "Freshly prepared pasta cut to order",
//   shop: "DeLaurenti Specialty Food and Wine",
//   cost: 10,
// }, {
//   name: "Chocolate Coconut Body Bar",
//   image:"http://pikeplacemarket.org/sites/default/files/styles/merchant/public/2_0.jpg?itok=cOFIo8G8",
//   description: "Sustainably grown and uses organic ingredients",
//   shop: "Moon Valley Organics",
//   cost: 16,
// }];

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      shops: this.store.findAll('shop')
    });
  }
});
