const SearchFilter = ({newSearch, handleSearch}) => {
    return (
        <div>
            <form onChange={handleSearch}>
            <div>
                name: <input value ={newSearch} onChange={handleSearch} />
            </div>
            </form>
       </div>
    )
}

export default SearchFilter;