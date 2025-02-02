let quotes = [
"Decentralize the future. 🌐",  
"Crypto empowers everyone. 💪",  
"Blockchain builds trust. 🔗",  
"Invest in innovation. 💡",  
"Why wait? Join revolution! 🚀",  
"Crypto: Future of finance? 💸",  
"Ready for blockchain? 🔗",  
"Buy the dip, HODL. 💎",  
"Smart contracts, smarter future. 🤖",  
"Your keys, your crypto. 🔑",  
"Transparency on-chain. 👀",  
"Decentralization = freedom. 🕊️",  
"Crypto transcends borders. 🌍",  
"Stake now, earn later. 🌱",  
"NFTs redefine ownership. 🎨",  
"Build on blockchain. 🛠️",  
"Join the crypto movement. 👥",  
"Secure digital assets. 🔒",  
"Trust the code. 👨💻",  
"Embrace DeFi. 💹",  
"Earn while sleeping. 😴",  
"Crypto is inevitable. ⏳",  
"Innovate or stagnate. 🚀",  
"Power to the people. ✊",  
"No middlemen, just crypto. ✂️",  
"Future-proof your portfolio. 📈",  
"Diversify with crypto. 🌐",  
"Think global, crypto local. 🌍",  
"Code is law. ⚖️",  
"Decentralize everything. 🌐",  
"HODL through storms. 💎",  
"Mine, stake, earn. ⛏️",  
"Privacy is right. 🛡️",  
"Bank the unbanked. 🏦",  
"Fast, secure transactions. ⚡",  
"WAGMI. 🚀",  
"DYOR before investing. 🔍",  
"DeFi changes finance. 💸",  
"DAOs govern communities. 🏛️",  
"NFTs unlock creativity. 🎨",  
"Metaverse needs crypto. 🕶️",  
"Web3 is coming. 🌐",  
"Stay bullish. 🐂",  
"Fiat fails, crypto prevails. 💪",  
"Adapt or get left. ⏳",  
"Crypto never sleeps. 🌙",  
"Be your own bank. 🏦",  
"Liquidity drives markets. 💧",  
"Innovate with blockchain. 💡",  
"Tokenize the world. 🌍",  
"Ready for adoption? 🚀",  
"Why trust banks? 🏦",  
"Risk or opportunity? 🤔",  
"Bull run incoming? 📈",  
"Decentralized future inevitable? 🌐",  
"Layer 2 scales. ⚖️",  
"Cross-chain matters. 🔗",  
"Reward early adopters. 🎁",  
"Smart money here. 💼",  
"Green crypto thrives. 🌱",  
"Trade 24/7, anywhere. 🌍",  
"Cold wallets win. ❄️",  
"Ethereum powers dApps. ⚡",  
"Bitcoin: digital gold. 🪙",  
"Altcoins = diversity. 🌈",  
"Bubble or breakthrough? 🎈",  
"When Lambo? Soon. 🚗",  
"Staking pays off? ✅",  
"DeFi replace banks? 🏦",  
"NFTs: fad or future? 🎨",  
"Governance tokens empower. 🗳️",  
"Scalability solves congestion. 🚦",  
"Privacy coins matter. 🕶️",  
"Crypto philanthropy grows. ❤️",  
"Regulation meets innovation. ⚖️",  
"Education is key. 🔑",  
"Community drives projects. 👥",  
"In crypto we trust. ✊",  
"Hackers fear blockchain. 🛡️",  
"Innovation never stops. 🚀",  
"Bullish on crypto? 🐂",  
"Crypto winter coming? ❄️",  
"Ready for mainstream? 🌊",  
"Adoption accelerating? 🚀",  
"Portfolio decentralized enough? 🌐",  
"FOMO wisely. 📉",  
"Crypto bridges economies. 🌉",  
"DEXs > CEXs. 🔄",  
"Custody your coins. 🔐",  
"Crypto beats inflation. 💸",  
"Meme coins valuable? 🐕",  
"Secure = rich. 💰",  
"Unlock potential. 🔓",  
"Global payments, instant. ⚡",  
"Smart contracts automate trust. 🤖",  
"The people’s choice. 👥",  
"Blockchain verifies truth. ✅",  
"Invest in unknown. 🌌",  
"Crypto creates equality. ⚖️",  
"To the moon! 🌕",  
];

const quoteDisplay = document.getElementById('quoteDisplay');
const copyButton = document.getElementById('copyButton');
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

// Initial display
quoteDisplay.textContent = quotes[currentIndex];
intervalId = setInterval(displayNextQuote, 12000);

// Event listeners
copyButton.addEventListener('click', copyQuote);

// Reset animation on window focus
window.addEventListener('focus', () => {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.animation = 'none';
    void progressBar.offsetWidth;
    progressBar.style.animation = 'progress 59s linear infinite';
});
