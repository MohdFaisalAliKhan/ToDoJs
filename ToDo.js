
let x = 0;

 function add() {
    var todoText=document.getElementById("todoEntry").value;
    // document.getElementById("thistask").innerHTML=todoText;
    $("#tbl").append("<tr class='less'><td><input type='checkbox' id='check' value='' onclick='checkTask(this)' name='input'/> <span id='edit"+(x)+"'>"+todoText+"</span> <input type='button' name='delete' id='delete' value='Delete Task' onclick='deleteTask(this)'/> <input type='button' id='update' value='Update Task' onclick='updateTask(edit"+(x)+")'/></td></tr>");
    x = x+1;
    }
    
  function checkTask(val){
      $('input[type=checkbox]').change(function() {
          if( $(this).prop('checked')) {
                  
                 var selected=$(val).closest("tr");
                  $(val).closest("tr").remove();
                  $("#completed").append(selected);

                  
              }else {
                  var selected=$(val).closest("tr");
                  $(val).closest("tr").remove();
                  $("#tbl").append(selected);
                 
              }
        });
    }


  function deleteTask(val){
       $(val).closest("tr").remove();
       $('#editField').empty();

  }
  
  function updateTask(val) {
      let row_id = val.id;
      document.getElementById("editField").innerHTML="Enter the new text <input type='text' name='edit_value' id='edit_value'><input type='submit' value='Submit' id='modify' onclick='modify("+row_id+")'>";
    
  }
  function modify(val){
      var newValue=document.getElementById("edit_value").value;
      document.getElementById(val.id).innerText = newValue;
      $('#editField').empty();
    }

