import { useState } from 'react';
import Header from "./Header";
import Search from "./Search";
import Booklist from "./Booklist";

function Boimela() {
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", featured: false },
    { id: 2, title: "1984", author: "George Orwell", featured: true },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", featured: false },
    { id: 4, title: "Pride and Prejudice", author: "Jane Austen", featured: true },
    { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", featured: false }
  ];

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto p-4"> 
      <Header />
      <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
      {/* 1. Pass the books array as a prop here */}
      <Booklist books={books} searchTerm={searchTerm} />
    </div>
  );
}

export default Boimela;