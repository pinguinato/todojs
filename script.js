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
  var todoList = doc.querySelector('#todolist');
  // seleziono l'input text
  var todoInput = doc.querySelector('#todo');
  // catturo l'evento tastiera
  todoInput.addEventListener('keypress',function(e){
    //console.dir(e); // mi restituisce in console il keycode
    // controllo che sia stato inserito invio e che il valore non sia vuoto
    
    //console.log(e.keyCode);
    //console.log(e.target.value);
    // aggiungi il todo
    if(e.keyCode === 13 && e.target.value && e.target.value.length >= 3){
      myApp.addTodo(e.target.value);
      // pulisco la casella di input
      e.target.value = '';
      console.dir(myApp.getTodos());
    }

    //console.log(e.keycode);
    
    /*

    if(e.keycode === 13 && e.target.value && e.target.value.length >= 3){
      console.log(e.target.value);
      
      console.dir(myApp.getTodos());
    }

    */

  });

  var todos = myApp.getTodos(); // abbiamo un array di todos

  //var elementi = todos.map(function(todo){
  //  return '<li>'+todo+'</li>';
  //});

   var li, todoText;
  
   todos.forEach(function(todo){
     console.log(todo+'\n');
     li = doc.createElement('li');
     todoText = doc.createTextNode(todo);
  //   //console.log(todoText);
     li.appendChild(todoText);
     todoList.appendChild(li);
   });
  

  //todoList.innerHTML = elementi;

});
