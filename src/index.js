let book = { title: "Harry Potter" };

const publish = book => {
    book.isPublished = true;
};

publish(book);

console.log(book);