import PropTypes from 'prop-types';

function Search({searchTerm,onSearchBook})
{

    return (
        <form>
       
        <input 
        type="text" 
        value={searchTerm}
        onChange={(e) => onSearchBook(e.target.value)}
        placeholder="Search books..." className="mb-4 border rounded-md p-1 w-full"/>
        </form>
    );
}

Search.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchBook: PropTypes.func.isRequired
};
export default Search;

