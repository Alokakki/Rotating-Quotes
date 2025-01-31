let quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "Stay hungry, stay foolish. – Steve Jobs",
    "The people who are crazy enough to think they can change the world are the ones who do. – Steve Jobs"
];

const quoteDisplay = document.getElementById('quoteDisplay');
const copyButton = document.getElementById('copyButton');
const quotesInput = document.getElementById('quotesInput');
const updateButton = document.getElementById('updateQuotes');
let currentIndex = 0;
let intervalId;

function displayNextQuote() {
    quoteDisplay.style.opacity = '0';
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % quotes.length;
        quoteDisplay.textContent = quotes[currentIndex];
        quoteDisplay.style.opacity = '1';
    }, 500);
}

function copyQuote() {
    navigator.clipboard.writeText(quoteDisplay.textContent).then(() => {
        copyButton.classList.add('copied');
        copyButton.innerHTML = `
            <svg class="copy-icon" viewBox="0 0 24 24" width="24" height="24">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
            Copied!
        `;
        
        setTimeout(() => {
            copyButton.classList.remove('copied');
            copyButton.innerHTML = `
                <svg class="copy-icon" viewBox="0 0 24 24" width="24" height="24">
                    <path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                </svg>
                Copy
            `;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function updateQuotes() {
    const newQuotes = quotesInput.value.split(',').map(quote => quote.trim()).filter(quote => quote !== '');
    
    if (newQuotes.length > 0) {
        quotes = newQuotes;
        currentIndex = 0;
        quoteDisplay.textContent = quotes[currentIndex];
        
        // Reset the interval
        clearInterval(intervalId);
        intervalId = setInterval(displayNextQuote, 59000);
        
        // Reset the progress bar animation
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.animation = 'none';
        void progressBar.offsetWidth;
        progressBar.style.animation = 'progress 59s linear infinite';
        
        // Clear the input
        quotesInput.value = '';
    }
}

// Initial display
quoteDisplay.textContent = quotes[currentIndex];
intervalId = setInterval(displayNextQuote, 59000);

// Event listeners
copyButton.addEventListener('click', copyQuote);
updateButton.addEventListener('click', updateQuotes);
quotesInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        updateQuotes();
    }
});

// Reset animation on window focus
window.addEventListener('focus', () => {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.animation = 'none';
    void progressBar.offsetWidth;
    progressBar.style.animation = 'progress 59s linear infinite';
});
