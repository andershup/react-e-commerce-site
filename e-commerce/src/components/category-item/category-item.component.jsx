import './category-item.styles.scss';

const CategoryItem = ({category}) => {
  const { title, imageUrl } = category
  return (
    <div category-container>
      <div className='background-image' style={{backgroundImage: `url(${imageUrl})` }}/>
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Select</p>
      </div>
    </div>
  )
}

export default CategoryItem