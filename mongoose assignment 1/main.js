const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/libraryDB");

const Book = require("./books");

async function addbook(bookDetails){
    const book = new Book(bookDetails);
    try{
        await book.save();
        console.log("Book added successfully");
    }catch(err){
        console.log(err.message)   
    }
}

addbook({
    title: "fikr eske mekabir",
    author: "fikr addis",
    yearPublished: 1951,
    genres: ["Fiction", "romance"]
  });
  addbook({
    title: "romeo and juliet",
    author: "samuel jackson",
    yearPublished: 1931,
    genres: ["Fiction", "romance"]
  });
 async function updatebookcopies(title , availableCopies ){

    try {
        await Book.updateOne({ title: title }, { $set: { availableCopies: availableCopies } });
        console.log("Book updated ");

    } catch (err) {
        console.log(err.message)
    }


}

updatebookcopies("fikr eske mekabir", 10);

async function deletebook(title){
    try{  
        await Book.deleteOne({ title: title }); 
        console.log("Book deleted"); 
    }
catch{
    console.log(err.message)
}

}

deletebook("fikr eske mekabir");
async function findBooksByAuthor(authorName) {
    try {
      const books = await Book.find({ author: authorName });
      console.log("Books by author:", books);
    } catch (error) {
      console.error("Error finding books by author:", error);
    }}
findBooksByAuthor("fikr addis")