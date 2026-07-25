import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";
import PropTypes from "prop-types";

// Destructure 'book' from the props object properly
function Bookrow({ book }) {
    return (
        <>
            <BookDetails title={book.title} author={book.author} />
            <FeatureBook />
        </>
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