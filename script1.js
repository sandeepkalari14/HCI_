document.getElementById('map-image').addEventListener('click', function(e) {
  var popup = document.getElementById('popup');
  popup.style.display = 'block';
  popup.style.left = e.pageX + 'px';
  popup.style.top = e.pageY + 'px';
});

document.getElementById('pickup').addEventListener('click', function() {
  console.log('Set as pickup');
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('dropoff').addEventListener('click', function() {
  console.log('Set as dropoff');
  document.getElementById('popup').style.display = 'none';
});


// Example logic for buttons
document.getElementById('prev-button').addEventListener('click', function() {
  // Logic to go to the previous page
  // This could be changing the window.location URL or updating content dynamically
  window.location.href = "./index5.html"
});

document.getElementById('next-button').addEventListener('click', function() {
  // Logic to go to the next page
  // This could be changing the window.location URL or updating content dynamically
  window.location.href = "./index2.html"

});
