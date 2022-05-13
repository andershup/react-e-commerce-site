
const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Tools'
    },
    {
      id: 2,
      title: 'Gifts'
    },
    {
      id: 3,
      title: 'Novelty Items'
    },
    {
      id: 4,
      title: 'Toys'
    }, 
    {
      id: 5,
      title: 'Bespoke'
    }
  ]

  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <div className="background-image"/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App;
