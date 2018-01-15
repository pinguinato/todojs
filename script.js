//alert("test");
// closure
var TodoList = function(){


  var doc = document;
  // un array per gestire i todos
  var todos = [
    'Fare la spesa',
    'Chiamare Stefania',
    'Bestemmiare'
  ];

  // funzione che ci serve per aggiungere un LI
    var createLI = function(text){
        //console.log(text);
        var li = doc.createElement('li');
        li.appendChild(doc.createTextNode(text));
        //console.log(li);
        return li;
    };

  return {
    // ritorna i todos
    getTodos : function(){
     return todos;
   },
    // aggiunge un todo
    addTodo : function(todo){
      todos.push(todo);
    },
    // create LI
    createLI : createLI
  }
};

// quando il DOM sarà pronto
document.addEventListener('DOMContentLoaded',function(){

  var myApp = TodoList();
  //myApp.addTodo('Go to work'); // aggiunge un todo
  //alert(typeof myApp.getTodos()[0]); // ritorna tipo stringa
  //alert(myApp.getTodos()[0]); // ritorna il valore dell'elemento

    var showCompleted = false;

  // stampa in console i todos
  //console.log(myApp.getTodos());

  var doc = document; // il document
  // gli passo l'id della mia lista
  var todoList = doc.querySelector('#todolist');
  // seleziono l'input text
  var todoInput = doc.querySelector('#todo');
  // catturo l'evento tastiera
  var showCompleteBtn = doc.querySelector('#showCompleteBtn');



  showCompleteBtn.addEventListener('click',function(){
     showCompleted = true;
      // mi prendo tutti quelli della lista che hanno la classe checked
     var checkedElements = todoList.getElementsByClassName('checked'); // questo mi ritorna un array
     console.dir(checkedElements);
     // ciclo sull'array
      for(var i=0;i<checkedElements.length;i++){
          checkedElements[i].style.display = 'block'; // gli tolgo il display:none
      }
  });


  //listener sulla lista
  todoList.addEventListener('click',function(e){
      // controllo se ho cliccato un elemento li
      if (e.target.id != 'addElementLi' && e.target.nodeName.toLowerCase() === 'li' && e.offsetX >= 7 && e.offsetX <= 20 ){
            console.log(e); // controlla proprietà offsetX
          //e.target.className = 'checked';
          e.target.classList.add('checked');
          if(!showCompleted){
              e.target.classList.add('hidden');
          }
        }
  });


  // listener sulla casella di input
  todoInput.addEventListener('keypress',function(e){
    //console.dir(e); // mi restituisce in console il keycode
    // controllo che sia stato inserito invio e che il valore non sia vuoto
    
    //console.log(e.keyCode);
    //console.log(e.target.value);
    // aggiungi il todo
    if(e.keyCode === 13 && e.target.value && e.target.value.length >= 3){
      myApp.addTodo(e.target.value);
      // mi salvo il valore del todo
      var todo = e.target.value;
      // pulisco la casella di input
      e.target.value = '';

      // var li = doc.createElement('li');
      // li.appendChild(doc.createTextNode(todo));

      var li = myApp.createLI(todo);


      todoList.insertBefore(li,todoList.firstElementChild.nextElementSibling);
      //console.dir(myApp.getTodos());
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

   //var li, todoText;
  
   todos.forEach(function(todo){
  //    console.log(todo+'\n');
  //    li = doc.createElement('li');
  //    todoText = doc.createTextNode(todo);
  // //   //console.log(todoText);
  //    li.appendChild(todoText);
  //    todoList.appendChild(li);
     todoList.appendChild(myApp.createLI(todo));
   });
  

  //todoList.innerHTML = elementi;

});
