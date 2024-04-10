document.addEventListener('DOMContentLoaded', function() {
  var dropoffArea = document.getElementById('dropoff-area');
  var dropdownList = document.getElementById('dropdown-list');

  // Prevent the default behavior of the area element
  dropoffArea.addEventListener('click', function(event) {
      event.preventDefault();
      dropdownList.classList.toggle('hidden');
  });

  // Close the dropdown if clicking outside of it
  window.addEventListener('click', function(event) {
      if (!event.target.matches('#dropoff-area') && !dropdownList.contains(event.target)) {
          dropdownList.classList.add('hidden');
      }
  });
});

// Example logic for buttons
document.getElementById('prev-button').addEventListener('click', function() {
    // Logic to go to the previous page
    // This could be changing the window.location URL or updating content dynamically
    window.location.href = "./index.html"
    
  });
  
  document.getElementById('next-button').addEventListener('click', function() {
    // Logic to go to the next page
    // This could be changing the window.location URL or updating content dynamically
    window.location.href = "./index3.html"

  });
  