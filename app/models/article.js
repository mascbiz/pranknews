import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr('string'),
  category: DS.attr('string'),
  relativePath: Ember.computed('headline', 'category', 'video', function() {
    var category = Ember.String.dasherize(this.get('category')).replace(/[^a-zA-Z\-[0-9]\//g, '');
    var headline = Ember.String.dasherize(this.get('headline')).replace(/[^a-zA-Z\-[0-9]\//g, '');
    var video    = "-" + this.get('video');

    return [category, headline + video].join("/");
  }),
  url: Ember.computed("relativePath", function() {
    if (this.get('ready')) { return "http://latlmes.com/" + this.get('relativePath'); }
    return "http://latlmes.com/";
  }),
  video: DS.attr('string'),
  options: DS.attr('array'),
  explanation: DS.attr('string'),
  ready: Ember.computed('headline', function() {
    return this.get('headline').length > 0;
  })
});
