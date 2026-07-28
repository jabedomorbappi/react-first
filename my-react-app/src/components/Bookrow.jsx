import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";
import PropTypes from "prop-types";

// Destructure 'book' from the props object properly
function Bookrow({ book }) {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
            <BookDetails title={book.title} author={book.author} />
            <FeatureBook />
        </div>
    );
}

// Fixed 'prototype' to 'propTypes'
Bookrow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }).isRequired
};

export default Bookrow;