import CategoryItem from '../directory/derectory.component'

const Directory = (categories) => {
   <div className='category-container'>
   {categories.map((category) => (
    <CategoryItem key={category.id} category={category}/>
   ))}
 </div>
}

export default Directory