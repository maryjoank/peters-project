document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('read-more-toggle');
    var additionalContent = document.querySelector('.additional-content');
  
    toggleButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default link behavior
      additionalContent.classList.toggle('hidden');
      if (additionalContent.classList.contains('hidden')) {
        toggleButton.textContent = 'Read More';
      } else {
        toggleButton.textContent = 'Read Less';
      }
    });
  });
  