(function () {
"use strict";

angular.module('public')
.controller('MyinfoController', MyinfoController);

MyinfoController.$inject = ['MenuService','ApiPath'];
function MyinfoController(MenuService,ApiPath) {
  var myinfoCtrl = this;
  myinfoCtrl.basePath = ApiPath;
myinfoCtrl.firstName=MenuService.firstName();
myinfoCtrl.lastName=MenuService.lastName();
myinfoCtrl.emailAdress=MenuService.emailAdress();
myinfoCtrl.phoneNumber=MenuService.phoneNumber();
myinfoCtrl.shortName=MenuService.shortName();
//myinfoCtrl.item=MenuService.getItem(myinfoCtrl.shortName);
myinfoCtrl.title=MenuService.title();
myinfoCtrl.desc=MenuService.desc();

}

})();
