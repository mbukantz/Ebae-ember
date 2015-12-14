import DS from 'ember-data';

export default DS.Model.extend({
  startingPrice: DS.attr('number'),
  currentPrice: DS.attr('number'),
  shippingPrice: DS.attr('number'),
  sellerId: DS.attr('number'),
  startTime: DS.attr('date'),
  endTime: DS.attr('date'),
  duration: DS.attr('number'),
  item: DS.belongsTo('item',  {async: true})
});
