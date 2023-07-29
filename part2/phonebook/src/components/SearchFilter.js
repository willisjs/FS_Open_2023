const SearchFilter = ({newSearch, handleSearch}) => {
    return (
        <div>
            <h2>Search Filter</h2>
            <form onChange={handleSearch}>
            <div>
                name: <input value ={newSearch} onChange={handleSearch} />
            </div>
            </form>
       </div>
    )
}

export default SearchFilter;