// ============================================================
// EXERCISE: Fetching data from an API
// ============================================================
//
// GOAL
// ----
// Build a book search using the Open Library API.
// When the user searches for a title, display the results
// (book title + author) as a list on the page.
//
// API endpoint:
// https://openlibrary.org/search.json?q=YOUR_SEARCH_TERM
// e.g.: https://openlibrary.org/search.json?q=the+lord+of+the+rings
//
// Try it in your browser first to see what the response looks like.
// The data you need is inside: response.docs[]
// Each book has: .title and .author_name[]
//
//
// ============================================================

console.log("script loaded");

// STEP 1: Select HTML elements
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const resultsList = document.getElementById("results");

// STEP 2: Add click event listener to the search button
searchBtn.addEventListener("click", searchBooks);


// STEP 4: Define the search function
function searchBooks() {
  // Get the search term from the input field
  const searchTerm = searchInput.value.trim();

  // Check if search term is empty
  if (searchTerm === "") {
    alert("Please enter a book title");
    return;
  }

  console.log("Searching for:", searchTerm);

  // Build the API URL (replace spaces with + for the URL)
  const apiUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(
    searchTerm
  )}`;

  console.log("API URL:", apiUrl);

  // Clear previous results
  resultsList.innerHTML = "";

  // STEP 5: Fetch data from the Open Library API
  fetch(apiUrl)
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      // Convert response to JSON
      return response.json();
    })
    .then((data) => {
      console.log("API Response:", data);

      // STEP 6: Check if we got any results
      if (data.docs.length === 0) {
        resultsList.innerHTML =
          "<li>No books found. Try a different search.</li>";
        return;
      }

      // STEP 7: Loop through each book and create list items
      data.docs.forEach((book) => {
        // Extract title
        const title = book.title;

        // Extract authors (author_name is an array)
        const authors = book.author_name
          ? book.author_name.join(", ")
          : "Unknown Author";

        // Create a list item
        const listItem = document.createElement("li");
        listItem.innerHTML = `<strong>${title}</strong> by ${authors}`;

        // Add the list item to the results
        resultsList.appendChild(listItem);
      });
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching data:", error);
      resultsList.innerHTML = `<li>Error: Could not fetch data. ${error.message}</li>`;
    });
}
