angular.module('todoApp').directive('todoTitle',function(){ // 자바스크립트에서 디렉티브 앵귤러 모듈을 만들 때 선언법
  return{
    template: '<h1>TodoList</h1>'
  }
});