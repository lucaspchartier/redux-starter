import { Map } from 'immutable';

let book = Map({ title: "Harry Potter" });

const publish = book => {
    return book.set("isPublished", true);
};

book = publish(book);

console.log(book.toJS());