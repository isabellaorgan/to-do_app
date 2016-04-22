'use strict';

$(function () {

  var counter = 0;

  function enterTask() {
    var text = $('#enter_task').val();
    $('#todo_list').append('<li><span>' + text + '</span><input type="submit" id="edit' + counter + '" value="Edit">' + '<input type="submit" class="done" id="delete' + counter + '" value="Delete">' + '</li>');
    $('#edit' + counter).click(function() {
      $(this).prev().attr('contenteditable', 'true');
      $(this).prev().focus();
    });
    $('#delete' + counter).click(function () {
      $(this).parent().remove();
    });

    counter++;
  }

    $('#add_task').on('click', enterTask);

});
