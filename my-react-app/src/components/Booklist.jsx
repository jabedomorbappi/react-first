import Bookrow from "./Bookrow";

// 1. Define your data array outside the component
const Books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        featured: false
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        featured: true
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        featured: false
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        featured: true
    },
    {
        id: 5,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        featured: false
    }
];

function Booklist() {
    return (
        <ul>
            {
                Books.map((book) => (
                    <li key={book.id} >
                        <Bookrow book={book} />
                    </li>
                ))
            }
            
        </ul>
    );
}

// 2. Only export the component (or move Books to its own file if you need to export it separately)
export default Booklist;