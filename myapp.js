/**
 * Created by saketmohan on 7/16/15.
 */

(function() {

var mod = angular.module('myapp', ['ngMessages']);
mod.controller('MainCtrl', MainController);

    function MainController() {

        var mctrl = this;
        mctrl.name = "Angular JS";

    }



})();