function newItem() {
    // Adding a new item to the list of items:
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }
  
    // Crossing out an item from the list of items:
    li.on("dblclick", function () {
      li.toggleClass("strike");
    });
  
    // Adding the delete button "X":
    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);
  
    crossOutButton.on("click", function () {
      li.addClass("delete");
    });
  
    // Reordering the items:
    $('#list').sortable();
  }
  












































// =============================== Vanilla Js ====================================

// function newItem(){
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("input").value;
//     let text = document.createTextNode(inputValue);
//     li.appendChild(text);

//     if(inputValue === ''){
//         alert('You must write something')
//     }else{
//         let list= document.querySelector('#list');
//         list.appendChild(li);
//     }

//     function crossOut(){
//         li.classList.toggle('strike');

//     }
//     li.addEventListener('dblclick', crossOut);

//     // adding delete button 'X'
//     let crossOutButton = document.createElement('button');
//     crossOutButton.appendChild(document.createTextNode('X'));
//     li.appendChild(crossOutButton);

//     crossOutButton.addEventListener('click', deleteListItem);

//     // adding class as 'delete' in the list of item
//     function deleteListItem(){
//         li.classList.add('delete');
//     }

//     // 4. Reordering the items: 
//   $('#list').sortable();


// }