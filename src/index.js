import { Map } from 'immutable';

let book = Map({ title: "Harry Potter" });

const publish = book => {
    book.isPublished = true;
};

publish(book);

console.log(book);