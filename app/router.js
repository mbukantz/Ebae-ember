import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('categories', function() {
    this.route('category', {
      path: ':category_id'
    });
    this.route('new');
  });
  this.route('listings', function() {
    this.route('new');
  });
  this.route('items');
});

export default Router;
