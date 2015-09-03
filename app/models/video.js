import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  imageName: DS.attr('string'),
  startSeconds: DS.attr('string'),
  ytid: DS.attr('string'),
  slogan: DS.attr('string')
});
