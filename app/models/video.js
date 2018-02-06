import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name:             DS.attr('string'),
  url:              DS.attr('string'),
  imageName:        DS.attr('string'),
  startSeconds:     DS.attr('number'),
  ytid:             DS.attr('string'),
  slogan:           DS.attr('string'),
  front:            DS.attr('boolean'),

  imageUrl:   Ember.computed('imageName', function() {
    return '/assets/images/video_stills/' + this.get('imageName');
  })
});
