// Code goes here
(function(){
  var app = angular.module('todoApp',[]);
  
  app.controller('TodoCtrl',['$scope',function($scope){
    $scope.todos=[
        {
        title: '운동하기',
        completed:true,
        createdAt: Date.now()
        },
        {
          title: '요리하기',
          completed:false,
          createdAt: Date.now()
        },
        {
        title: '게임하기',
        completed:false,
        createdAt: Date.now()
        }
      ];
      
      $scope.add=function(newTodoTitle){
        //alert(newTodoTitle);
        var newTodo ={
          title: newTodoTitle,
          completed:false,
          createdAt: Date.now()
        };
        
        $scope.todos.push(newTodo);
        
        $scope.newTodoTitle="";
      }
      $scope.remove=function(todo){
        var idx = $scope.todos.findIndex(function(item){
          return item.id === todo.id;
        });
        
        if(idx > -1){ // 인덱스 번호가 있으면 (존재 확인)
          $scope.todos.splice(idx, 1) //splice 메소드 활용으로 해당 번호 하나만 삭제
        }
      }
  }]);
})();
