function searchBar({ searchTerm, onSearch }) {

    return (
        <div className="search-container">
            <span
                className="search-icon">⌕</span>
            <input type="text"
                placeholder="Search stories,experiences..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)} />
            {searchTerm && (
                <button
                    className="clear-search"
                    onClick={()=>onSearch("")}>
                        x
                </button>
            )}
        </div>
    );

}
export default searchBar;