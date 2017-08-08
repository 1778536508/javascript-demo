var app =angular.module("app",["ngRoute"])
    app.config(['$routeProvider',function($routeProvider){
        $routeProvider
            .when('/shouye',{
                templateUrl:"che/home.html"
            })
            .when('/wd',{
                templateUrl:"che/wd.html"
            })
            .when('/vehicle',{
                templateUrl:"che/vehicle.html"
            })
            .when('/screen',{
                templateUrl:"che/screen.html"
            })
            .when('/jinrong',{
                templateUrl:"che/jinrong.html"
            })
            .when('/sell',{
                templateUrl:"che/guazi.html"
            })
            .when('/yuyue',{
                templateUrl:"che/yuyue.html"
            })
            .when('/gujia',{
                templateUrl:"che/text.html"
            })
            .when('/pinpai',{
                templateUrl:"che/text2.html"
            })
            .when('/dy',{
                templateUrl:"che/dy.html"
            })
            .when('/perm',{
                templateUrl:"che/perm.html"
            })
            .when('/kj',{
                templateUrl:"che/kj.html"
            })
            .when('/jj',{
                templateUrl:"che/jj.html"
            })
            .when('/sc',{
                templateUrl:"che/sc.html"
            })
            .when('/dy',{
                templateUrl:"che/dy.html"
            })
            .when('/ll',{
                templateUrl:"che/ll.html"
            })
            .when('/mai',{
                templateUrl:"che/mai.html"
            })
            .when('/yh',{
                templateUrl:"che/yh.html"
            })
            .when('/yj',{
                templateUrl:"che/yj.html"
            })
            .when('/server',{
                templateUrl:"che/server.html"
            })
            .otherwise({
                redirectTo:"/shouye"
            })
    }])
