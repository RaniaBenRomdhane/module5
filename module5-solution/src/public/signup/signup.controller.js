(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var signupCtrl = this;
  signupCtrl.user={firstName:"",lastName:"",emailAdress:"",phoneNumber:""};
  signupCtrl.shortName="";

  signupCtrl.submit=function () {
    MenuService.ftName= signupCtrl.user.firstName;
    MenuService.lName= signupCtrl.user.lastName;
    MenuService.email= signupCtrl.user.emailAdress;
    MenuService.phone= signupCtrl.user.phoneNumber;
    MenuService.shName=signupCtrl.shortName;
    var promise = MenuService.getItem(signupCtrl.shortName);
    promise.then(function(result){
      signupCtrl.registred =true;
    }).
    catch(function (error) {
      signupCtrl.error =true;
    });
    }
}

})();
