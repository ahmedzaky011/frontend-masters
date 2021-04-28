function addFavoriteBook(bookName) {
	if (!bookName.includes("Great")) {
		favoriteBooks.push(bookName);
	}
}

function printFavoriteBooks() {
	console.log(`Favorite Books: ${favoriteBooks.length}`);
	for (let bookName of favoriteBooks) {
		console.log(bookName);
    document.getElementById("fav_books").innerHTML += "<div class='within_container'>" + bookName + "</div>"  
	}
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

printFavoriteBooks();