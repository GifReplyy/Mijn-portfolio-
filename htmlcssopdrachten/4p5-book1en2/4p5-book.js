var boekenwinkel = {
  boekenlijst: [
    {
      titel: "Milky Way: A Guide to the Galaxy",
      auteur: "Arthur C. Stardust",
      jaar: "1 januari 2023",
      afbeelding: "https://m.media-amazon.com/images/I/51dxaokpWqL._SX329_BO1,204,203,200_.jpg"
    },
    {
      titel: "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
      auteur: "Dan Ariely",
      jaar: "5 maart 2009",
      afbeelding: "https://m.media-amazon.com/images/I/51B7NcJlnxL._SX328_BO1,204,203,200_.jpg"
    },
    {
      titel: "Think Again: The Power of Knowing What You Don't Know",
      auteur: "Adam Grant",
      jaar: "29 januari 2021",
      afbeelding: "https://m.media-amazon.com/images/I/41Ug+93BLaL._SX331_BO1,204,203,200_.jpg"
    }
  ]
};

var nepBoeken = [
  {
      titel: "Milky Way: A Guide to the Galaxy",
      auteur: "Arthur C. Stardust",
      jaar: "1 januari 2023",
      afbeelding: "https://m.media-amazon.com/images/I/51dxaokpWqL._SX329_BO1,204,203,200_.jpg"
  },
  {
      titel: "Predictably Irrational: The Hidden Forces That Shape Our Decisions",
      auteur: "Dan Ariely",
      jaar: "5 maart 2009",
      afbeelding: "https://m.media-amazon.com/images/I/51B7NcJlnxL._SX328_BO1,204,203,200_.jpg"
  },
  {
      titel: "Think Again: The Power of Knowing What You Don't Know",
      auteur: "Adam Grant",
      jaar: "29 januari 2021",
      afbeelding: "https://m.media-amazon.com/images/I/41Ug+93BLaL._SX331_BO1,204,203,200_.jpg"
  },
  {
    titel: "The Art of Procrastination: A Guide to Effective Dawdling, Lollygagging, and Postponing",
    auteur: "John Perry",
    jaar: "1 april 2012",
    afbeelding: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYucG5cnO6ygr6U2MYqFgPReDztkhk5RUsa9oSe0CoX6m2jv-"
  },
  {
    titel: "The Subtle Art of Not Giving a Duck: A Counterintuitive Approach to Living a Good Life",
    auteur: "Mark Manson",
    jaar: "15 september 2023",
    afbeelding: "https://media.s-bol.com/rmLVw1Qj2Xyw/550x833.jpg"
  },
  {
    titel: "The Hitchhiker's Guide to the Chatbot",
    auteur: "Douglas Adams",
    jaar: "12 mei 2022",
    afbeelding: "https://substack-post-media.s3.amazonaws.com/public/images/faab0a22-7bcf-4f92-873e-88d9b8bccb22_1400x1400.png"
  },
  {
    titel: "The Power of Now",
    auteur: "Eckhart Tolle",
    jaar: "1 maart 1997",
    afbeelding: "https://m.media-amazon.com/images/I/51iY6s7tN9L._SX324_BO1,204,203,200_.jpg"
  },
  {
    titel: "The Alchemist",
    auteur: "Paulo Coelho",
    jaar: "1 mei 1988",
    afbeelding: "https://m.media-amazon.com/images/I/81a+nwOZ+8L._SY346_.jpg"
  },
  {
    titel: "To Kill a Mockingbird",
    auteur: "Harper Lee",
    jaar: "11 juli 1960",
    afbeelding: "https://m.media-amazon.com/images/I/81OthjkJBhL._SY346_.jpg"
  },
  {
    titel: "1984",
    auteur: "George Orwell",
    jaar: "8 juni 1949",
    afbeelding: "https://m.media-amazon.com/images/I/71OL+x2FsRL._SY346_.jpg"
  },
  {
    titel: "Pride and Prejudice",
    auteur: "Jane Austen",
    jaar: "28 januari 1813",
    afbeelding: "https://m.media-amazon.com/images/I/91RjJauQwGL._SY346_.jpg"
  },
  {
    titel: "The Great Gatsby",
    auteur: "F. Scott Fitzgerald",
    jaar: "10 april 1925",
    afbeelding: "https://m.media-amazon.com/images/I/91fZg4z62OL._SY346_.jpg"
  }
];

function displayBoekenlijst() {
  var boekenlijstContainer = document.getElementById("boekenlijst");
  boekenlijstContainer.innerHTML = "";

  displayCarousel(boekenwinkel.boekenlijst, "boekenlijst");
}

function displayCarousel(books, containerId) {
  var carouselContainer = document.getElementById(containerId);
  carouselContainer.innerHTML = "";

  var carousel = document.createElement("div");
  carousel.className = "carousel";

  for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookDiv = BookElement(book, i, containerId);
    carousel.appendChild(bookDiv);
  }

  carouselContainer.appendChild(carousel);
}

function BookElement(book, index, containerId) {
  var bookDiv = document.createElement("div");
  bookDiv.className = "book";

  var image = document.createElement("img");
  image.src = book.afbeelding;
  image.alt = book.titel;
  bookDiv.appendChild(image);

  var title = document.createElement("h3");
  title.textContent = book.titel;
  bookDiv.appendChild(title);

  var author = document.createElement("p");
  author.textContent = "Auteur: " + book.auteur;
  bookDiv.appendChild(author);

  var year = document.createElement("p");
  year.textContent = "Jaar: " + book.jaar;
  bookDiv.appendChild(year);

  var button = document.createElement("button");
  button.textContent = containerId === "search-list" ? "Toevoegen" : "Verwijderen";
  button.addEventListener("click", function() {
    if (containerId === "search-list") {
      addBookToList(index);
    } else if (containerId === "boekenlijst") {
      removeBookFromList(index);
    }
  });
  bookDiv.appendChild(button);

  return bookDiv;
}

function addBookToList(index) {
  var book = nepBoeken[index];
  var existingIndex = boekenwinkel.boekenlijst.findIndex(function(item) {
    return item.titel === book.titel;
  });

  if (existingIndex === -1) {
    boekenwinkel.boekenlijst.push(book);
    displayBoekenlijst();
  }
}

function removeBookFromList(index) {
  boekenwinkel.boekenlijst.splice(index, 1);
  displayBoekenlijst();
}

function searchBook() {
  var searchTerm = document.getElementById("search").value;
  var searchList = document.getElementById("search-list");
  searchList.innerHTML = "";

  var results = nepBoeken.filter(function(book) {
    return book.titel.toLowerCase().includes(searchTerm.toLowerCase());
  });

  displayCarousel(results, "search-list");

  if (results.length === 0) {
    var noResults = document.createElement("p");
    noResults.textContent = "Geen resultaten gevonden.";
    searchList.appendChild(noResults);
  }
}

displayBoekenlijst();

// Stap 1: JSON-object weergeven op de console
console.log("JSON-object, Boekenwinkel:");
console.log(boekenwinkel);

// Stap 2: JSON-object naar JSON-string converteren en weergeven op de console
var jsonString = JSON.stringify(boekenwinkel);
console.log("JSON-string, Boekenwinkel:");
console.log(jsonString);

// Stap 3: JSON-string naar JavaScript-object converteren en eigenschappen weergeven op de console
var jsonObject = JSON.parse(jsonString);
console.log("JavaScript-object, Boekenwinkel:");
console.log(jsonObject);

var parallaxContainer = document.getElementById("zoekresultaten-section");
var parallaxSpeed = 0.2; // Pas de snelheid aan naar wens

window.addEventListener("scroll", function() {
  var yOffset = window.pageYOffset;
  var parallaxOffset = yOffset * parallaxSpeed;
  parallaxContainer.style.transform = "translateY(" + -parallaxOffset + "px)";
});