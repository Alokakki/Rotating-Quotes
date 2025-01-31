let quotes = ["Sideways chart? 🧘‍♂️ HODL",  
"Devs coding 🔥… mainnet soon?",  
"Weak hands sell memes, 💎 hands make history",  
"Theme song? 🎶 All I Do Is Win",  
"Gas fees: $50 swap? 💸 Cool story bro",  
"AMA tomorrow—🚗 *wen lambo?",  
"Rugpull? 🤗 We hugpull here",  
"FUD? 📉😂 DYOR + meme",  
"New ATH? 🌕✨ Tinder bio update",  
"OGs carry 🌍 *harder than Atlas",  
"Not here for 👨‍💻 *tech? U alive?",  
"Partnership 👀… *not Solana",  
"NFTs: 🖼 *“Art! (…floor price)”",  
"“Shitcoin?” 📜💥 *Whitepaper slap",  
"LFG! 🚀 *Stack bags tonight",  
"Therapist: “Problem?” 🔐 “Ledger.”",  
"Bear market? 🛒 Discount season",  
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
