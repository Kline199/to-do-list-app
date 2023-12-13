function newItem(event) {
    event.preventDefault();
  
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
  
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      $('#list').append(li);
    }
  
    li.on("dblclick", function () {
      li.toggleClass("strike");
    });
  
    let crossOutButton = $('<button>X</button>');
    li.append(crossOutButton);
  
    crossOutButton.on("click", function () {
      li.addClass("delete");
    });
  
    $('#input').val('');
  
    $('#list').sortable();
  }
  
  $('form[name="toDoList"]').submit(newItem);
  