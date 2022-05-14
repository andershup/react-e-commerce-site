import './category-item.stylesheet.scss';

const CategoryItem = ({category}) =>
<div className='categories-container'>
{categories.map(({title}) => (
  <div className='category-item-container'>
    {/* <div className='background-image' style={{backgroundImage: `url('${imageUrl}')`}}/> */}
    <div className='innner-container'>
  <h2>{title}</h2>
    </div>
  </div>
))}


</div>