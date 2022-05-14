import './category-item.styles.scss';

const CategoryItem = ({category}) => {
const {title} = category;
return (
<div className='categories-container'>
 
  <div className='category-item-container'>
    {/* <div className='background-image' style={{backgroundImage: `url('${imageUrl}')`}}/> */}
    <div className='innner-container'>
  <h2>{title}</h2>
    </div>
  </div>



</div>
)
}
export default CategoryItem;