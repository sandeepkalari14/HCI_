document.addEventListener('DOMContentLoaded', function() {
  var contactInfoButton = document.getElementById('contact-info-button');
  var contactInfoDialog = document.getElementById('contact-info-dialog');

  contactInfoButton.addEventListener('click', function() {
      contactInfoDialog.classList.toggle('hidden');
  });

  window.addEventListener('click', function(event) {
      if (!event.target.matches('#contact-info-button') && !contactInfoDialog.contains(event.target) && !contactInfoDialog.classList.contains('hidden')) {
          contactInfoDialog.classList.add('hidden');
      }
  });
});

// Example logic for buttons
document.getElementById('prev-button').addEventListener('click', function() {
    // Logic to go to the previous page
    // This could be changing the window.location URL or updating content dynamically
  window.location.href = "./index4.html"

  });
  
  document.getElementById('next-button').addEventListener('click', function() {
    // Logic to go to the next page
    // This could be changing the window.location URL or updating content dynamically
  window.location.href = "./index.html"

  });
  