// JavaScript for project
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function getQuote() {
    quoteText.textContent = "Loading...";
    authorText.textContent = "";
    try {
        const response = await fetch('https://api.quotable.io/random');
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        quoteText.textContent = data.content;
        authorText.textContent = `- ${data.author}`;
    } catch (error) {
        quoteText.textContent = "Failed to fetch quote. Please try again.";
        authorText.textContent = "";
        console.error("Error fetching quote:", error);
    }
}

// Event listener for button
newQuoteBtn.addEventListener('click', getQuote);

// Initial quote on page load
getQuote();

// Demo of Event Loop
console.log("I'm learning about");
for (let idx = 0; idx < 999999999; idx++) {}
console.log("the Event Loop");
