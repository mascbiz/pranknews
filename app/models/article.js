import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr('string'),
  category: DS.attr('string'),
  url: Ember.computed('headline', 'category', 'video', function() {
    var url = Ember.String.underscore(this.get('category')) + '/' + Ember.String.underscore(this.get('headline'));
    return url;
  }),
  video: DS.attr('string')
});
