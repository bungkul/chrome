const article = document.querySelector("nav");

// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  console.log("ada");
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} menit membaca`;

  // Support for API reference docs
  const heading = article.querySelector("h6");
  // Support for article docs with date

  heading.appendChild(badge);
}