var books = [
    { title: "Harry Potter and the Philosopher's Stone", isRead: true },
    { title: "Harry Potter and the Chamber of Secrets", isRead: false },
    { title: "Harry Potter and the Prisoner of Azkaban", isRead: true },
];

function isBookRead(books, titleToSearch) {
    var bookByTitle = books.find(function (book) {
        return book.title === titleToSearch;
    });
    return Boolean(bookByTitle) && bookByTitle.isRead;
}

console.log(isBookRead(books, "The end of the times"));
console.log(isBookRead(books, "Harry Potter and the Chamber of Secrets"));
console.log(isBookRead(books, "Harry Potter and the Prisoner of Azkaban"));
