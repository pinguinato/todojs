//alert("test");
// closure
var TodoList = function(){

  // un array per gestire i todos
  var todos = [
    'Fare la spesa',
    'Chiamare Stefania',
    'Bestemmiare'
  ];

  return {
    // ritorna i todos
    getTodos : function(){
     return todos;
   },
    // aggiunge un todo
    addTodo : function(todo){
      todos.push(todo);
    }
  }
};

// quando il DOM sarà pronto
document.addEventListener('DOMContentLoaded',function(){

  var myApp = TodoList();
  //myApp.addTodo('Go to work'); // aggiunge un todo
  //alert(typeof myApp.getTodos()[0]); // ritorna tipo stringa
  //alert(myApp.getTodos()[0]); // ritorna il valore dell'elemento

  // stampa in console i todos
  //console.log(myApp.getTodos());

  var doc = document; // il document
  // gli passo l'id della mia lista
  var todoList = doc.querySelector('#todo');

  var todos = myApp.getTodos(); // abbiamo un array di todos

  var elementi = todos.map(function(todo){
    return '<li>'+todo+'</li>';
  });

  // var li;
  // var todoText;
  //
  // todos.forEach(function(todo){
  //   //console.log(todo+'\n');
  //   doc.createElement('li');
  //   todoText = doc.createTextNode(todo);
  //   //console.log(todoText);
  //
  //   li.appendchild(todoText);
  //
  //   todoList.appendchild(li);
  // });


  todoList.innerHTML = elementi;

});
