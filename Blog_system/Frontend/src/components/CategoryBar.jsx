function CategoryBar({ selectedCategory, onCategoryChange }) {
    const categories = [
        "All",
        "Academics",
        "Campus Life",
        "Technology",
        "Career",
        "Personal Growth",
        "Internship",
    ];
    return (
        <div className="category-wrapper">
            <div className="category-bar">
                {categories.map((category)=>(
                <button
                    key={category}
                    type="button"
                    className={
                        selectedCategory === category?
                        "category-button active":"category-button"
                    }
                    onClick={()=>onCategoryChange(category)}>
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default CategoryBar;