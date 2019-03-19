app.controller("MainController", function($scope, $resource, PostResource, UserResource){
    $scope.posts = PostResource.query();
    $scope.users = UserResource.query();
    
    $scope.remove = function(post){
        PostResource.delete({id: post.id});
        $scope.posts = $scope.posts.filter(function(element){
            return element.id != post.id;
        });
    };
});

app.controller("PostController", function($scope, $location, $routeParams, PostResource){
    $scope.title = "Modify Post";
    $scope.post = PostResource.get({id: $routeParams.id});
    
    $scope.save = function(){
        PostResource.update({id: $scope.post.id}, {data: $scope.post});
        $location.path("/"); 
    };
});

app.controller("NewPostController", function($scope, $location, PostResource){
    $scope.title = "Create Post";
    $scope.post = {};
    $scope.save = function(){
        PostResource.save({data: $scope.post});
        $location.path("/");
    };
});