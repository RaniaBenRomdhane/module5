(function () {
"use strict";

angular.module('common')
.constant('ApiPath', 'https://raniabr.herokuapp.com')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

/*------------------ MY INFO------------------------- */
  service.shName="";
  service.ftName="";
  service.lName= "";
  service.email= "";
  service.phone= "";
  service.shortName=function(){return service.shName};
  service.firstName=function(){return service.ftName};
  service.lastName= function(){return service.lName};
  service.emailAdress= function(){return service.email};
  service.phoneNumber= function(){return service.phone};


/* -------------------CATEGORIES------------------- */
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

/*-----------------------ITEMS---------------------- */
  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  /*------------------ONE ITEM ----------------------------*/
  service.getItem = function (shortName) {


    return $http({
      method :"GET",
      url : ('https://raniabr.herokuapp.com/menu_items/'+ shortName + '.json'),
      })
    .then(function (response) {
      service.name=response.data.name;
      service.description=response.data.description;
      });
  };
  /*----retrieving info ----*/
  service.title=function () { return service.name; };
  service.desc=function () { return service.description; };
 

}
})();
