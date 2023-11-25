$(document).ready(function() {
    let characters = []; // Array to store characters data
    let originalOrder = []; // Store the original order of characters
  
    // Fetch data from JSON file
    $.getJSON("characters.json", function(data) {
      characters = data;
      originalOrder = [...characters]; // Store the original order
  
      displayCharacters(characters);
    });
  
    // Display characters in table
    function displayCharacters(characters) {
      const tableBody = $("#charactersTable tbody");
      tableBody.empty();
  
      characters.forEach(function(character) {
        tableBody.append(`<tr>
          <td>${character.Charactername}</td>
          <td>${character.Role}</td>
          <td>${character.firstname}</td>
          <td>${character.lastname}</td>
          <td>${character.dateofbirth}</td>
        </tr>`);
      });
    }
  
    // Sorting functionality
    let sortColumn = "";
    let ascending = true;
  
    $("th a").on("click", function(e) {
      e.preventDefault();
      const column = $(this).data("column");
  
      if (sortColumn === column) {
        ascending = !ascending;
      } else {
        ascending = true;
        sortColumn = column;
      }
  
      if (ascending) {
        characters.sort((a, b) => (a[column] > b[column] ? 1 : -1));
      } else {
        characters.sort((a, b) => (a[column] < b[column] ? 1 : -1));
      }
  
      displayCharacters(characters);
      updateChevronIcon(column);
    });
  
    // Update chevron icon based on sorting order
    function updateChevronIcon(column) {
      $("th a").find("span").remove();
  
      const icon = ascending ? "&#x25B2;" : "&#x25BC;";
      $(`th a[data-column="${column}"]`).append(`<span>${icon}</span>`);
    }
  
    // Reset table to original order on third click
    let clickCount = 0;
    $("th a").on("click", function() {
      clickCount++;
      if (clickCount === 3) {
        characters = [...originalOrder];
        sortColumn = "";
        ascending = true;
        clickCount = 0;
        displayCharacters(characters);
        $("th a").find("span").remove(); // Remove chevron icons
      }
       
                  
    });
  });
  
