function newItem() {

    //Create and append list item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        $('#list').append(li);
    }

    //Cross out an item from the list
    li.on('dblclick', function () {
        li.toggleClass('strike');
    });

    //Add delete button to list item
    let crossOutButton = $('<crossOutButton>X</crossOutButton>')
    li.append(crossOutButton);

    //Delete list item via css class
    crossOutButton.on('click', function () {
        li.addClass('delete');
    });

    //Reorder list items
    $('#list').sortable();
}