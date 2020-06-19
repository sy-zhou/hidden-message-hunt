const results = document.getElementById("results");

var searchResults = books;

function showResults() {
  results.innerHTML = "";
  searchResults.forEach(book => {
    // create html book element for each search result
    let htmlBook = document.createElement('div');
    htmlBook.classList.add('result');
    htmlBook.innerHTML += '<div>' + book.title + '</div>';
    // TODO: Add code here to display the rest of the properties of each book

    // adds html book element to results div
    results.appendChild(htmlBook);
  });

}

// when the button 'Search' is pressed, this function is executed
function search() {
  // gets the filter type and query from page
  var filterType = document.getElementById("filter_type").value;
  var query = document.getElementById("query").value;

  // clear previous search results before setting the variable with the new search
  searchResults = [];

  // Based on filterType, we determine which search function to execute. 
  // TODO: Fill in the rest of the search functions!
  if (filterType == "title") {
    searchByTitle(query);
  } else if (filterType == "pages") {
    var bounds = query.split('-');
    searchByPages(parseInt(bounds[0], 10), parseInt(bounds[1], 10));
  }
  // After searching, we call showResults to display the results in the html
  showResults();
}

/*
  TODO: Fill in the search functions below according to the search specifications. Make sure that your function puts the matching results into the variable searchResults. The first function searchByTitle is completed as an example.
*/

// a book matches if the book's title includes the parameter title
function searchByTitle(title) {
  title = title.toLowerCase();

  books.forEach(function (book) {
    if (book.title.toLowerCase().includes(title)) {
      searchResults.push(book);
    }
  });
}

// a book matches if the book's author includes the parameter author
function searchByAuthor(author) {
  // TODO
}

// a book matches if one of the book's tags matches the parameter tag EXACTLY
function searchByTag(tag) {
  // TODO
}

// a book matches if pagesLowerBound <= book.pages <= pagesUpperBound
function searchByPages(pagesLowerBound, pagesUpperBound) {
  // TODO
}

// a book matches if yearLowerBound <= book.publication_year <= yearUpperBound
function searchByPublicationYear(yearLowerBound, yearUpperBound) {
  // TODO
}

showResults();
