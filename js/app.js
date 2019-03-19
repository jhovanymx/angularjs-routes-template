var app = angular.module("FinalApp", ["lumx", "ngRoute", "ngResource"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            controller: "MainController",
            templateUrl: "templates/home.html"
        }).when("/post/new", {
            controller: "NewPostController",
            templateUrl: "templates/post-form.html"
        }).when("/post/edit/:id", {
            controller: "PostController",
            templateUrl: "templates/post-form.html"
        }).when("/post/:id", {
            controller: "PostController",
            templateUrl: "templates/post.html"
        }).otherwise("/");
});