document.getElementById('theme-toggle').addEventListener('click', function() {
    let body = document.body;
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    this.textContent = body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });

    // Form input validation
    document.querySelector('form').addEventListener('submit', function(event) {
        let textarea = document.getElementById('contractText');
        let fileInput = document.getElementById('contractFile');
        if (textarea.value === '' && fileInput.files.length === 0) {
            event.preventDefault();
            alert('Please provide either contract text or upload a contract file.');
        }
    });
});
