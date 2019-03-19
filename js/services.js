app.factory("PostResource", function($resource){
    return $resource("https://jsonplaceholder.typicode.com/posts/:id", {id: "@id"}, {update: {method: "PUT"}});
});

app.factory("UserResource", function($resource){
    return $resource("https://jsonplaceholder.typicode.com/users/:id", {id: "@id"}, {update: {method: "PUT"}});
});