const feedIcon = document.getElementById('feedIcon');

feedIcon.addEventListener('click', () => {
    // This is where you would add logic to toggle the feed visibility
    // For this example, we'll just log a message
    console.log('Feed icon clicked!');
    // You could add logic here to change the icon appearance or
    // dispatch a custom event for other parts of your application
    // to listen to and handle the feed toggling.
});

// Optional: Add click handler for the Following button if needed later
const followingButton = document.querySelector('.following-button');
followingButton.addEventListener('click', () => {
    console.log('Following button clicked!');
    // Add logic here to change the button text/style (e.g., to "Follow")
});

