function showInfo(infoType) {
  // Hide all info content elements
  var infoContents = document.querySelectorAll('.info-content');
  infoContents.forEach(function(content) {
      content.classList.add('hidden');
  });

  // Show the appropriate info content based on the button clicked
  var infoToShow = document.getElementById(infoType);
  infoToShow.classList.remove('hidden');

  // Show the dialog if it's not already shown
  var infoDialog = document.getElementById('info-dialog');
  if (infoDialog.classList.contains('hidden')) {
      infoDialog.classList.remove('hidden');
  }
}

// This function is to hide the info dialog
function hideInfo() {
  var infoDialog = document.getElementById('info-dialog');
  infoDialog.classList.add('hidden');
  
  // Also hide all info contents
  var infoContents = document.querySelectorAll('.info-content');
  infoContents.forEach(function(content) {
      content.classList.add('hidden');
  });
}

// Event listener for closing the dialog when clicking outside of it
window.addEventListener('click', function(event) {
  var infoDialog = document.getElementById('info-dialog');
  var pickupBtn = document.getElementById('pickup-info-btn');
  var delayBtn = document.getElementById('delay-info-btn');

  // Check if the target is not the dialog or the buttons
  if (!infoDialog.contains(event.target) && event.target !== pickupBtn && event.target !== delayBtn) {
      hideInfo();
  }
});

// Prevent the area elements from performing any action
document.querySelectorAll('area').forEach(function(area) {
  area.addEventListener('click', function(event) {
      event.preventDefault();
  });
});

// Example logic for buttons
document.getElementById('prev-button').addEventListener('click', function() {
  // Logic to go to the previous page
  // This could be changing the window.location URL or updating content dynamically
  window.location.href = "./index3.html"
});

document.getElementById('next-button').addEventListener('click', function() {
  // Logic to go to the next page
  // This could be changing the window.location URL or updating content dynamically
  window.location.href = "./index5.html"
});
