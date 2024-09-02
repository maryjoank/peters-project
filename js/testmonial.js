document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('testimonial-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get testimonial text and author name from form inputs
        var testimonialText = document.getElementById('testimonial-text').value;
        var testimonialAuthor = document.getElementById('testimonial-author').value;
        
        // Create testimonial item
        var testimonialItem = document.createElement('div');
        testimonialItem.classList.add('testimonial-item', 'text-center');
        testimonialItem.innerHTML = `
            <div class="position-relative mb-5">
                <img class="img-fluid rounded-circle border border-secondary p-2 mx-auto" src="img/no-profile1.png" alt="">
                <div class="testimonial-icon">
                    <i class="fa fa-quote-left text-primary"></i>
                </div>
            </div>
            <p class="fs-5 fst-italic">${testimonialText}</p>
            <hr class="w-25 mx-auto">
            <h5>${testimonialAuthor}</h5>
            <span>Profession</span>
        `;
        
        // Append testimonial item to the testimonial carousel
        var testimonialCarousel = document.querySelector('.testimonial-carousel');
        testimonialCarousel.appendChild(testimonialItem);
        
        // Reset form inputs
        document.getElementById('testimonial-text').value = '';
        document.getElementById('testimonial-author').value = '';
    });
});
