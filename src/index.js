// import { Map } from 'immutable';
import { produce } from 'immer'; 

let book = { title: "Harry Potter" };

const publish = book => {
    // return book.set("isPublished", true);
    return produce(book, draftBook => {
        draftBook.isPublished = true;
    });
};

let updated = publish(book);

console.log(book);
console.log(updated);