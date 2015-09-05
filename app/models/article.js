import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr('string'),
  category: DS.attr('string'),
  placeholderHeadline: DS.attr('string'),
  relativePath: Ember.computed('headline', 'placeholderHeadline', 'category', 'video', function() {
    var category = Ember.String.dasherize(this.get('category')).replace(/[^\w\s\-]/g, '');
    var headline = Ember.String.dasherize(this.get('headline') || this.get('placeholderHeadline')).replace(/[^\w\s\-]/g, '');
    var video    = "-" + this.get('video');

    return [category, headline + video].join("/").replace(/[\-]+/g, '-');
  }),
  url: Ember.computed("relativePath", function() {
    return "http://www.latlmes.com/" + this.get('relativePath');
  }),
  video: DS.attr('string'),
  options: DS.attr('array'),
  explanation: DS.attr('string'),
  ready: Ember.computed('headline', function() {
    return this.get('headline').length > 0;
  })
});
