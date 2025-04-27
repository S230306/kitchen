// script.js

// Show an alert when someone clicks "Call Now"
document.addEventListener('DOMContentLoaded', function() {
  const callBtn = document.querySelector('.call-btn');
  callBtn.addEventListener('click', function() {
    alert('Calling Home Made Kitchen...');
  });
});
