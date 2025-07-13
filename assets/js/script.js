// Set launch date (30 days from now)
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 30);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;
    
    if (distance < 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function subscribeEmail() {
    const email = document.getElementById('emailInput').value;
    
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Store email (in a real app, you'd send this to your server)
    alert('Thank you! We\'ll notify you when we launch.');
    document.getElementById('emailInput').value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update countdown every second
    setInterval(updateCountdown, 1000);
    updateCountdown();
    
    // Add enter key support for email input
    document.getElementById('emailInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            subscribeEmail();
        }
    });
    
    // Add click event to notify button (fallback for onclick)
    document.querySelector('.notify-btn').addEventListener('click', subscribeEmail);
});

// Optional: Add additional interactive features
function addParticleEffect() {
    // You can add more advanced particle effects here
    // This is a placeholder for future enhancements
}

// Optional: Add smooth scrolling or other page interactions
function initializePageInteractions() {
    // Add any additional page interactions here
    // This is a placeholder for future enhancements
}