import PropTypes from "prop-types";

function BookDetails({ title, author }) {
    return (
        <div>
            <h1>{title}</h1>
            <h4>{author}</h4>
        </div>
    );
}

// Fixed 'prototype' to 'propTypes'
BookDetails.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default BookDetails;