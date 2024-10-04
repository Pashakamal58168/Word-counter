
const textInput = document.getElementById('textInput');
const wordCountDisplay = document.getElementById('wordCount');
const charCountDisplay = document.getElementById('charCount');
const sentenceCountDisplay = document.getElementById('sentenceCount');
const paragraphCountDisplay = document.getElementById('paragraphCount');

function updateCounts() {
    const text = textInput.value.trim();

    // Character count
    const charCount = text.length;

    // Word count
    const wordCount = text === "" ? 0 : text.split(/\s+/).filter(word => word.length > 0).length;

    // Sentence count
    const sentenceCount = text === "" ? 0 : text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    // Paragraph count (split by newlines)
    const paragraphCount = text === "" ? 0 : text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0).length;

    // Update the display
    charCountDisplay.textContent = charCount;
    wordCountDisplay.textContent = wordCount;
    sentenceCountDisplay.textContent = sentenceCount;
    paragraphCountDisplay.textContent = paragraphCount;
}

// Add event listener to update counts whenever the user types
textInput.addEventListener('input', updateCounts);

