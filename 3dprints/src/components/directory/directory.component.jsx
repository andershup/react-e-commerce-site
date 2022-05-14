import CategoryItem from "../category-item/category-item.component";

import './directory.styles.scss'

const  Directory = ({categories}) => {
    const { title, imageURL } = categories
    return (
        <div className="directory-contianer">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category}/> 
                
            ))}
        </div>
    )
}