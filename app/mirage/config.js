// import Mirage from 'ember-cli-mirage';

export default function() {
    this.timing = 0;

    this.get('/videos', function(db, request) {
      var videos = db.videos;

      if (request.queryParams.front) {
        videos =  db.videos.filter(function(v) {
          return (v.front.toString() === request.queryParams.front);
        });
      }

      return {"videos": videos};
    });

    this.get('/videos/:id', function(db, request) {
      return {"videos": db.videos.find(request.params.id) };
    });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
