angular.module("playerFactory", [])
  .factory('Player', function($resource) {
    return $resource('/api/players/:id', null, {'update': { method:'PUT' }});
  });
