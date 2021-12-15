console.log("This is Tutorial 36");
// create a class library and implement the following
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname,user)
// returnBook(bookname)

class Library{
    constructor(booklist){
        this.booklist=booklist;
        this.issuedBook={};
    }

    getBookList(){
        this.booklist.forEach(element => {
            console.log(element);
        });
    }

    issuebook(bookname,user){
        if(this.issuedBook[bookname]==undefined){
            this.issuedBook[bookname]=user;
        }
        else{
            console.log("This book has already been issued");
        }
    }

    returnBook(bookname){
        delete this.issuedBook[bookname];
    }

}
