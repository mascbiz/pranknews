
export default function() {
    this.timing = 0;
    this.namespace = 'api';

    this.get('/videos', function(db, request) {
      var videos = db.videos;

      if (request.queryParams.front) {
        videos =  db.videos.where({front: request.queryParams.front});
      }

      return {"videos": videos.models};
    });

    this.get('/videos/:id', function(db, request) {
      return {"videos": db.videos.find(request.params.id)}
    });
}
