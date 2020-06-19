const results = document.getElementById("results");
const count = document.getElementById("count");

var searchResults = books;

function showResults() {
  results.innerHTML = "";
  searchResults.forEach(book => {
    // create html book element for each search result
    let htmlBook = document.createElement('div');
    htmlBook.classList.add('result');
    htmlBook.innerHTML += '<div>' + book.title + '</div>';
    // TODO: Add code here to display the rest of the properties of each book
    htmlBook.innerHTML += '<div>' + book.author + '</div>';
    htmlBook.innerHTML += '<div>Tags: ' + book.tags.join(', ') + '</div>';
    htmlBook.innerHTML += '<div>Pages: ' + book.pages + '</div>';
    htmlBook.innerHTML += '<div>Published: ' + book.publication_year + '</div>';

    // adds html book element to results div
    results.appendChild(htmlBook);
  });
  count.innerHTML = searchResults.length;
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
  } else if (filterType == "author") {
    searchByAuthor(query);
  } else if (filterType == "tag") {
    searchByTag(query);
  } else if (filterType == "pages") {
    var bounds = query.split('-');
    searchByPages(parseInt(bounds[0], 10), parseInt(bounds[1], 10));
  } else if (filterType == "publication year") {
    var bounds = query.split('-');
    searchByPublicationYear(parseInt(bounds[0], 10), parseInt(bounds[1], 10));
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
  author = author.toLowerCase();

  books.forEach(function (book) {
    if (book.author.toLowerCase().includes(author)) {
      searchResults.push(book);
    }
  });
}

// a book matches if one of the book's tags matches the parameter tag EXACTLY
// Notice that book.tags is an array
function searchByTag(tag) {
  books.forEach(function (book) {
    for (var i = 0; i < book.tags.length; ++i) {
      if (book.tags[i] == tag) {
        searchResults.push(book);
        break;
      }
    }
  });
}

// a book matches if pagesLowerBound <= book.pages <= pagesUpperBound
function searchByPages(pagesLowerBound, pagesUpperBound) {
  books.forEach(book => {
    if (book.pages <= pagesUpperBound && book.pages >= pagesLowerBound) {
      searchResults.push(book);
    }
  });
}

// a book matches if yearLowerBound <= book.publication_year <= yearUpperBound
function searchByPublicationYear(yearLowerBound, yearUpperBound) {
  books.forEach(book => {
    if (book.publication_year <= yearUpperBound && book.publication_year >= yearLowerBound) {
      searchResults.push(book);
    }
  });
}

showResults();
