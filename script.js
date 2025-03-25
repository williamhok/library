const myLibrary = []

function Book(author, title, pages, isRead) {
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead = isRead
}

function addBookToLibrary(author, title, pages, isRead) {
    const newBook = new Book(author, title, pages, isRead)

    myLibrary.push(newBook)
}

addBookToLibrary("This is author", "This is title", "This is pages", "Read already?")
console.log(myLibrary)