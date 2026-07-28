import PropTypes from 'prop-types';
import Bookrow from "./Bookrow";

function Booklist({ searchTerm, books }) {

    const row=[]

books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase())==-1)
    {
        return ;
    }
    row.push(<Bookrow book={book} key={book.id}/>)

    })


  return (
   <div className="grid grid-cols-1 gap-4">
      {row}
    </div>
    

    )

}


Booklist.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Booklist;