import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  pictureUrl: DS.attr('string'),
  conditionId: DS.attr('number'),
  // listingId: DS.attr('number'),
  // categoryId: DS.attr('number'),
  pictureFileName: DS.attr('string'),
  pictureContentType: DS.attr('string'),
  pictureFileSize: DS.attr('number'),
  pictureUpdatedAt: DS.attr('date'),
  listing: DS.belongsTo('listing',  {async: true}),
  category: DS.belongsTo('category', {async: true})
});
