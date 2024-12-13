let word = "Live Laugh Love"; // The phrase to be repeated
let wc = 0; // Word count initialized to 0

function setup() {
  noCanvas(); // No need for a canvas

  let content = select("body"); // Select the body element
  content.attribute("id", "content"); // Add an ID attribute to the body

  content.child(createElement("h1", word)); // Create and append an h1 element with the phrase

  // Generate repeated sentences until the word count reaches 100,000
  while (wc < 100000) {
    // Create and append h2 elements with the phrase repeated 2 to 6 times
    content.child(createElement("h2", String(word + " ").repeat(random(2, 6)).toUpperCase()));

    for (let p = 0; p < 500; p++) { // Create 500 paragraphs
      let paragraph = '';
      for (let s = 0; s < 500; s++) { // Each paragraph contains 500 sentences
        let internalPunct = [",", ",", ",", ";", " --"]; // Internal punctuation options
        let endPunct = [".", ".", "?", "!"]; // Ending punctuation options
        let sentence = word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of the phrase
        let sentenceLength = 5; // Each sentence is 5 words long
        wc += sentenceLength + 1; // Increment word count by sentence length plus 1 for punctuation

        // Construct the sentence
        for (let w = 0; w < sentenceLength; w++) {
          sentence += " " + word;
          if (random() < 0.2) {
            sentence += random(internalPunct); // Add internal punctuation with 20% probability
          }
        }
        sentence += random(endPunct) + " "; // Add ending punctuation
        paragraph += sentence; // Add the sentence to the paragraph
      }
      content.child(createElement("p", paragraph)); // Create and append a paragraph element with the constructed paragraph
    }
    
    window.PagedPolyfill.preview(); // Call the PagedPolyfill preview function
  }
}
