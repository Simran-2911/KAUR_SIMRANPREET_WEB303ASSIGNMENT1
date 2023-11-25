$(document).ready(function() {
$.ajax({
  url: 'character.json',
  dataType: 'json',
  success: function(data) {
      for (var i=0; i<data.length; i++) {
          var row = $('<tr><td>' + data[i].Charactername + '</td><td>' + data[i].Role + '</td><td>' + data[i].firstname + '</td><td>' + data[i].lastname + '</td><td>' + data[i].dateofbirth + '</td></tr>');
          $('#characterTable').append(row);
      }
  },
});
  function updateChevronIcon(column) {
    $("th a").find("span").remove();

    const icon = ascending ? "&#x25B2;" : "&#x25BC;";
    $(`th a[data-column="${column}"]`).append(`<span>${icon}</span>`);

    // Remove other chevrons
    $("th a").not(`[data-column="${column}"]`).each(function() {
      $(this).find("span").remove();
    });
  }
         $('#search').keyup(function(){  
              search_table($(this).val());  
         });  
         function search_table(value){  
              $('#characterTable tr').each(function(){  
                   var found = 'false';  
                   $(this).each(function(){  
                        if($(this).text().toLowerCase().indexOf(value.toLowerCase()) >= 0)  
                        {  
                             found = 'true';  
                             $(this).css('background-color', 'darkgreen'); 
                         $(this).css('color', 'white');
                        }  
                        else{
                            $(this).css('background-color', 'darkgreen'); 
                         $(this).css('color', 'black');
                        }
                   });  
                  
                     
              });  
         }
     });
