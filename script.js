document.addEventListener('DOMContentLoaded', function() {
    const ratingButtons = document.querySelectorAll('.rating-option');
    const submitButton = document.querySelector('.submit');
    const ratingState = document.querySelector('.rating-state');
    const thankYouState = document.querySelector('.thank-you-state');
    const thankYouMessage = document.querySelector('.thank-you-message');

    let selectedRating = null;

    ratingButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            for (let i = 0; i < ratingButtons.length; i++) {
                ratingButtons[i].classList.remove('selected');
                ratingButtons[i].style.backgroundColor = 'hsl(213, 19%, 18%)'; // reset to default
                ratingButtons[i].style.color = 'hsl(217, 12%, 63%)'; // reset to default
            }
            e.currentTarget.classList.add('selected');
            e.currentTarget.style.backgroundColor = 'white'; // highlight selected
            e.currentTarget.style.color = 'hsl(216, 12%, 8%)'; // text color for contrast
            selectedRating = e.currentTarget.textContent;
        });
    });

    submitButton.addEventListener('click', function() {
        if (selectedRating) {
            ratingState.style.display = 'none';
            thankYouState.style.display = 'flex';
            thankYouMessage.textContent = `You selected ${selectedRating} out of 5`;
        } else {
            alert('Please select a rating before submitting.');
        }
    });
});

