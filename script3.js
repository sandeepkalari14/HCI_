document.addEventListener('DOMContentLoaded', function() {
    var shareBtn = document.getElementById('share-location-btn');
    var shareDialog = document.getElementById('share-dialog');

    shareBtn.addEventListener('click', function() {
        shareDialog.classList.toggle('hidden');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#share-location-btn') && !shareDialog.contains(event.target)) {
            shareDialog.classList.add('hidden');
        }
    });
});

// Example logic for buttons
document.getElementById('prev-button').addEventListener('click', function() {
    // Logic to go to the previous page
    // This could be changing the window.location URL or updating content dynamically
    window.location.href = "./index2.html"
    
  });
  
  document.getElementById('next-button').addEventListener('click', function() {
    // Logic to go to the next page
    // This could be changing the window.location URL or updating content dynamically
    window.location.href = "./index4.html"

  });
  