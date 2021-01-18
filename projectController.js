var app = angular.module("firstAngular",[]);

app.controller("CRUDController", function($scope){
    $scope.BookList=[];
    $scope.AddData = function(){
        var book = {
            Id:$scope.BookList.length + 1,
            Title:$scope.Title,
            Author:$scope.Author,
            Published:$scope.Published
        };
        $scope.BookList.push(book);
        ClearModel();
    };

    $scope.DeleteData = function(book){
        var index = $scope.BookList.indexOf(book);
        $scope.BookList.splice(index,1);
    };

    $scope.BindSelectedData = function(book){
        $scope.Id=book.Id;
        $scope.Title = book.Title;
        $scope.Author = book.Author;
        $scope.Published = book.Published;
    };

    $scope.UpdateData = function(){
        $.grep($scope.BookList,function(e){
            if(e.Id == $scope.Id){
                e.Title = $scope.Title;
                e.Author = $scope.Author;
                e.Published = $scope.Published;
            }
        });
    };

    function ClearModel(){
        $scope.Id=0;
        $scope.Title='';
        $scope.Author='';
        $scope.Published=null;
    }
});