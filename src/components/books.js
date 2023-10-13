import BookItem from "./bookItems";

function Books(props) {

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book.isbn}></BookItem>
        }
    );
}
export default Books;